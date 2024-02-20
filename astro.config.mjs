// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true
    })
  ],
  output: 'hybrid',
  adapter: vercel()
})
