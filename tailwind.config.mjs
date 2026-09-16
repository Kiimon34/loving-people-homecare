/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          warm: '#FBF9F5',      // Soft background linen
          surface: '#FFFFFF',
          border: '#EFE7DE',
          amber: '#E08226',     // Primary logo gold/amber
          rust: '#C7541C',      // Deep terracotta
          dark: '#1F1A17',      // Primary typography & dark accents
          muted: '#6B625B'      // Secondary body copy
        }
      }
    },
  },
  plugins: [],
}
