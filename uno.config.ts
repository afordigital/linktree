// uno.config.ts
import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {}
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: 'Montserrat'
      }
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
