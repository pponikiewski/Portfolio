import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { contact, cvHref, ui } from '@/i18n/ui'
import { SITE } from '@/lib/schema'

// llms.txt (llmstxt.org): a plain summary of the site for language models and AI search.
export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order)
  const t = ui.en
  const lines = [
    '# Piotr Ponikiewski',
    '',
    `> ${t.meta.description}`,
    '',
    ...t.about.body,
    '',
    `- Website: ${SITE}/ (Polish version: ${SITE}/pl/)`,
    `- GitHub: ${contact.github}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- Email: ${contact.email}`,
    `- CV (PDF): ${SITE}${cvHref('en')}`,
    '',
    '## Case studies',
    '',
    ...projects.map((p) => {
      const status = p.data.status === 'in-progress' ? ' (in progress)' : ''
      return `- [${p.data.title}](${SITE}/projects/${p.id}/)${status}: ${p.data.tagline.en} ${p.data.summary.en} Stack: ${p.data.stack.join(', ')}. Source: ${p.data.repo}`
    }),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
