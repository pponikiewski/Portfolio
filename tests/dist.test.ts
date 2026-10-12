// Checks the built site in dist/, i.e. exactly what ships. Run after `astro build`.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(import.meta.dirname, '..', 'dist')

const pages = {
  en: 'index.html',
  pl: 'pl/index.html',
  tracker: 'projects/tracker/index.html',
  groupManager: 'projects/group-manager/index.html',
  netdoctor: 'projects/netdoctor/index.html',
  budgie: 'projects/budgie/index.html',
  notFound: '404.html',
  projects: 'projects/index.html',
} as const

// Every markdown file in the collection is a project with a case study.
const contentDir = join(import.meta.dirname, '..', 'src', 'content', 'projects')
const projects = readdirSync(contentDir)
  .filter((name) => name.endsWith('.md'))
  .map((name) => ({
    slug: name.replace(/\.md$/, ''),
    featured: !/^featured:\s*false\s*$/m.test(readFileSync(join(contentDir, name), 'utf8')),
  }))

const read = (file: string): string => readFileSync(join(dist, file), 'utf8')

function htmlFiles(dir: string = dist): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return htmlFiles(path)
    return name.endsWith('.html') ? [path] : []
  })
}

// Visible text only: drop comments, tags and the <head>.
const visibleText = (html: string): string =>
  html
    .replace(/<head>[\s\S]*?<\/head>/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')

const attr = (tag: string, name: string): string | undefined =>
  new RegExp(`\\s${name}="([^"]*)"`).exec(tag)?.[1]

test('every project has a case study and is listed on /projects/; home shows only featured ones', () => {
  const index = read(pages.projects)
  for (const { slug, featured } of projects) {
    assert.ok(existsSync(join(dist, 'projects', slug, 'index.html')), `${slug}: no case study`)
    assert.match(index, new RegExp(`href="/projects/${slug}/"`), `${slug}: missing on /projects/`)
    for (const file of [pages.en, pages.pl]) {
      assert.equal(read(file).includes(`href="/projects/${slug}/"`), featured, `${file}: ${slug}`)
    }
  }
  const hasMore = projects.some((p) => !p.featured)
  for (const file of [pages.en, pages.pl]) {
    assert.equal(read(file).includes('href="/projects/"'), hasMore, `${file}: All projects link`)
  }
  assert.equal(read(pages.tracker).includes('class="back" href="/projects/"'), hasMore)
})

test('a project marked in-progress says so on its card and case study', () => {
  for (const { slug } of projects) {
    const source = readFileSync(join(contentDir, `${slug}.md`), 'utf8')
    const inProgress = /^status:\s*in-progress\s*$/m.test(source)
    const caseStudy = read(`projects/${slug}/index.html`)
    assert.equal(caseStudy.includes('class="status">In progress<'), inProgress, slug)
  }
  assert.match(read(pages.projects), /Budgie<\/a>\s*<\/h3>\s*<span class="status">In progress<\/span>/)
  // The label sits next to the heading, never inside it, so the heading text stays the project name.
  for (const file of htmlFiles()) {
    for (const [, heading] of readFileSync(file, 'utf8').matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/g)) {
      assert.doesNotMatch(heading, /In progress|W trakcie/, file)
    }
  }
})

test('only home cards morph into case studies, so /projects/ does not animate titles', () => {
  assert.match(read(pages.en), /view-transition-name: title-tracker/)
  assert.doesNotMatch(read(pages.projects), /view-transition-name/)
})

test('404 page is not indexed and leads back to both home pages', () => {
  const html = read(pages.notFound)
  assert.match(html, /<meta name="robots" content="noindex">/)
  assert.doesNotMatch(html, /rel="canonical"/)
  assert.match(html, /href="\/"/)
  assert.match(html, /href="\/pl\/"/)
})

test('all pages are built', () => {
  for (const file of Object.values(pages)) {
    assert.ok(existsSync(join(dist, file)), `missing ${file}`)
  }
})

test('no page ships JavaScript (JSON-LD data blocks are the only allowed <script>)', () => {
  for (const file of htmlFiles()) {
    for (const [tag] of readFileSync(file, 'utf8').matchAll(/<script\b[^>]*>/gi)) {
      assert.match(tag, /type="application\/ld\+json"/, `${file}: ${tag}`)
    }
  }
})

const indexable = (Object.values(pages) as string[]).filter((f) => f !== pages.notFound)
const head = (file: string): string => read(file).split('<body')[0]
const metaContent = (html: string, key: string): string | undefined =>
  new RegExp(`<meta (?:name|property)="${key.replace(/[.:]/g, '\\$&')}" content="([^"]*)"`).exec(html)?.[1]

test('every indexable page has a unique title, a short description and a social image that exists', () => {
  const titles = new Set<string>()
  for (const file of indexable) {
    const h = head(file)
    const title = /<title>([^<]*)<\/title>/.exec(h)?.[1] ?? ''
    assert.ok(title && !titles.has(title), `${file}: missing or duplicate title "${title}"`)
    titles.add(title)
    const description = metaContent(h, 'description') ?? ''
    assert.ok(description.length >= 50 && description.length <= 160, `${file}: description length ${description.length}`)
    const image = metaContent(h, 'og:image') ?? ''
    assert.match(image, /^https:\/\/pponikiewski\.dev\//, `${file}: og:image not absolute`)
    assert.ok(existsSync(join(dist, decodeURI(new URL(image).pathname))), `${file}: og:image file missing ${image}`)
    assert.equal(metaContent(h, 'twitter:card'), 'summary_large_image', file)
    assert.equal(metaContent(h, 'author'), 'Piotr Ponikiewski', file)
  }
})

test('structured data: a Person on the home pages, an article with that author on case studies', () => {
  const graph = (file: string): Array<Record<string, unknown>> => {
    const json = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(read(file))?.[1]
    assert.ok(json, `${file}: no JSON-LD`)
    return (JSON.parse(json) as { '@graph': Array<Record<string, unknown>> })['@graph']
  }
  for (const file of [pages.en, pages.pl]) {
    const person = graph(file).find((n) => n['@type'] === 'Person')
    assert.equal(person?.name, 'Piotr Ponikiewski', file)
    assert.deepEqual(
      person?.sameAs,
      ['https://github.com/pponikiewski', 'https://www.linkedin.com/in/piotr-ponikiewski-580679232/'],
      file,
    )
  }
  for (const { slug } of projects) {
    const article = graph(`projects/${slug}/index.html`).find((n) => n['@type'] === 'TechArticle')
    assert.deepEqual(article?.author, { '@id': 'https://pponikiewski.dev/#person' }, slug)
  }
})

test('robots.txt points at a sitemap that lists every indexable page', () => {
  assert.match(readFileSync(join(dist, 'robots.txt'), 'utf8'), /^Sitemap: https:\/\/pponikiewski\.dev\/sitemap\.xml$/m)
  const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8')
  for (const file of indexable) {
    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(read(file))?.[1]
    assert.ok(canonical && sitemap.includes(`<loc>${canonical}</loc>`), `${file}: ${canonical} not in sitemap`)
  }
})

test('llms.txt summarises the site and links every case study', () => {
  const llms = readFileSync(join(dist, 'llms.txt'), 'utf8')
  assert.match(llms, /^# Piotr Ponikiewski$/m)
  for (const { slug } of projects) assert.ok(llms.includes(`https://pponikiewski.dev/projects/${slug}/`), slug)
})

test('no em dash or en dash anywhere', () => {
  for (const file of [...htmlFiles(), join(dist, 'llms.txt')]) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), /[–—]|&mdash;|&ndash;/, file)
  }
})

test('the group project stays neutral: no domain words, no production demo link', () => {
  const repoUrl = 'https://github.com/pponikiewski/roza-rozancowa'
  for (const file of [...htmlFiles(), join(dist, 'llms.txt'), join(dist, 'sitemap.xml')]) {
    const html = readFileSync(file, 'utf8').replaceAll(repoUrl, '')
    assert.doesNotMatch(html, /róż|roza|różan|rozanc|różaniec|vercel\.app/i, file)
  }
})

test('CV link matches the page language and the files exist', () => {
  assert.match(read(pages.en), /href="\/cv\/Piotr_Ponikiewski_cv_en\.pdf"/)
  assert.match(read(pages.pl), /href="\/cv\/Piotr_Ponikiewski_cv_pl\.pdf"/)
  assert.doesNotMatch(read(pages.en), /cv_pl\.pdf/)
  assert.doesNotMatch(read(pages.pl), /cv_en\.pdf/)
  for (const lang of ['en', 'pl']) {
    assert.ok(existsSync(join(dist, 'cv', `Piotr_Ponikiewski_cv_${lang}.pdf`)), `missing ${lang} CV`)
  }
})

test('every internal href and src resolves to a built file', () => {
  for (const file of htmlFiles()) {
    const html = readFileSync(file, 'utf8')
    for (const [, url] of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
      const path = decodeURI(url.split('#')[0].split('?')[0])
      const target = path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, path)
      assert.ok(existsSync(target), `${file} links to missing ${url}`)
    }
  }
})

test('every <img> has alt, width and height', () => {
  for (const file of htmlFiles()) {
    for (const [tag] of readFileSync(file, 'utf8').matchAll(/<img\b[^>]*>/g)) {
      assert.ok(attr(tag, 'alt'), `${file}: img without alt: ${tag}`)
      assert.ok(attr(tag, 'width') && attr(tag, 'height'), `${file}: img without size: ${tag}`)
    }
  }
})

test('html lang is set and the home pages point at each other', () => {
  const en = read(pages.en)
  const pl = read(pages.pl)
  assert.match(en, /<html lang="en"/)
  assert.match(pl, /<html lang="pl"/)
  assert.match(read(pages.tracker), /<html lang="en"/)
  for (const html of [en, pl]) {
    assert.match(html, /rel="alternate" hreflang="en" href="https:\/\/pponikiewski\.dev\/"/)
    assert.match(html, /rel="alternate" hreflang="pl" href="https:\/\/pponikiewski\.dev\/pl\/"/)
  }
})

test('hero says full-stack developer, no "junior" label anywhere', () => {
  for (const file of [pages.en, pages.pl]) {
    const html = read(file)
    const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)?.[1] ?? ''
    assert.match(h1, /full-stack developer/i, file)
    assert.doesNotMatch(html, /junior/i, file)
  }
})

test('activity heatmap is static and labelled; only built when a token is available', () => {
  for (const file of [pages.en, pages.pl]) {
    const section = /<section id="activity"[\s\S]*?<\/section>/.exec(read(file))?.[0]
    if (!process.env.GITHUB_TOKEN) {
      assert.equal(section, undefined, `${file}: heatmap rendered without a token`)
      continue
    }
    assert.ok(section, `${file}: heatmap missing although GITHUB_TOKEN is set`)
    assert.match(section, /<svg[^>]*role="img"[^>]*aria-labelledby="activity-summary"/)
    assert.match(section, /<p id="activity-summary">[\d,\s]+ (contributions?|kontrybucj[aei]) /)
    assert.ok((section.match(/<rect /g) ?? []).length >= 365, `${file}: fewer than 365 days`)
    assert.doesNotMatch(section, /: 0 (contributions|kontrybucji)</, `${file}: empty days carry labels`)
  }
})

test('/en redirects to /', () => {
  const html = read('en/index.html')
  assert.match(html, /http-equiv="refresh" content="0;url=\/"/)
})
