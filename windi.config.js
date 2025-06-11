import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: {
    base: {
      h2: {
        fontSize: '1.5em',
      },
    },
  },
  theme: {
    boxShadow: {
      'DEFAULT': '6px 6px 17px #111111e9'
    },
    textShadow: {
      'DEFAULT': '6px 6px 8px #11111134',
      '3xl': '6px 6px 8px #11111124',
      '2xl': '1px 1px 3px rgba(0, 0, 0, 0.25)',
    }
  },
})