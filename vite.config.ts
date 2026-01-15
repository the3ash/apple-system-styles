import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'font-preload',
      transformIndexHtml(html, ctx) {
        if (!ctx.bundle) return html

        const fontFile = Object.keys(ctx.bundle).find(
          (key) => key.includes('DepartureMono') && key.endsWith('.otf')
        )

        if (fontFile) {
          const preloadTag = `<link rel="preload" href="/${fontFile}" as="font" type="font/otf" crossorigin>`
          return html.replace('</head>', `  ${preloadTag}\n  </head>`)
        }

        return html
      },
    },
  ],
})
