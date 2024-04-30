// astro.config.ts
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), react(), tailwind()],
  output: 'hybrid',
  adapter: vercel()
});