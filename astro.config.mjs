import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://pponikiewski.dev',
  redirects: {
    '/en': '/',
  },
})
