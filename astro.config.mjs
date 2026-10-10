import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://pponikiewski.dev',
  redirects: {
    '/en': '/',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
