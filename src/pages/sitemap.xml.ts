import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE } from '@/lib/schema'

// Hand-rolled instead of @astrojs/sitemap: six URLs, and the two home pages need hreflang alternates.
export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order)
  const alternates = ['en', 'pl', 'x-default']
    .map((lang) => {
      const href = lang === 'pl' ? `${SITE}/pl/` : `${SITE}/`
      return `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`
    })
    .join('')
  const urls = [
    `<url><loc>${SITE}/</loc>${alternates}</url>`,
    `<url><loc>${SITE}/pl/</loc>${alternates}</url>`,
    `<url><loc>${SITE}/projects/</loc></url>`,
    ...projects.map((p) => `<url><loc>${SITE}/projects/${p.id}/</loc></url>`),
  ]
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n'
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
