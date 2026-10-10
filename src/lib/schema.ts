// schema.org JSON-LD. One Person entity, referenced by @id from every page, so search engines
// and AI answer engines resolve the site, the profile and the case studies to the same author.
import type { CollectionEntry } from 'astro:content'
import { contact, homeHref, type Lang } from '@/i18n/ui'

export const SITE = 'https://pponikiewski.dev'
const PERSON_ID = `${SITE}/#person`
const WEBSITE_ID = `${SITE}/#website`

const person = (photoUrl: string) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Piotr Ponikiewski',
  url: `${SITE}/`,
  image: photoUrl,
  jobTitle: 'Full-stack developer',
  email: `mailto:${contact.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Bielsko-Biała', addressCountry: 'PL' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Wyższa Szkoła Informatyki i Zarządzania w Bielsku-Białej (WSIZ)' },
  knowsAbout: ['TypeScript', 'React', 'PostgreSQL', 'Supabase', 'Row Level Security', 'Tauri', 'Rust', 'SQLite', 'Offline-first sync'],
  knowsLanguage: ['pl', 'en', 'de'],
  sameAs: [contact.github],
})

export function homeSchema(lang: Lang, photoUrl: string, description: string) {
  const url = new URL(homeHref(lang), SITE).href
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person(photoUrl),
      { '@type': 'WebSite', '@id': WEBSITE_ID, url: `${SITE}/`, name: 'Piotr Ponikiewski', inLanguage: ['en', 'pl'], publisher: { '@id': PERSON_ID } },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        inLanguage: lang,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': PERSON_ID },
      },
    ],
  }
}

export function caseStudySchema(project: CollectionEntry<'projects'>, url: string, description: string, imageUrl: string) {
  const { title, tagline, stack, repo } = project.data
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        url,
        headline: `${title}: ${tagline.en}`,
        description,
        image: imageUrl,
        inLanguage: 'en',
        author: { '@id': PERSON_ID },
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': `${url}#code` },
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${url}#code`,
        name: title,
        description: tagline.en,
        codeRepository: repo,
        programmingLanguage: stack,
        author: { '@id': PERSON_ID },
      },
      { '@type': 'Person', '@id': PERSON_ID, name: 'Piotr Ponikiewski', url: `${SITE}/`, sameAs: [contact.github] },
    ],
  }
}
