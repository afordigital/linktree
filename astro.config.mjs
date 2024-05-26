// astro.config.ts
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), react()],
  output: 'hybrid',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});