/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
