import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screen : {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors : {
        "black_c_1" : "#2F4858",
        "gold" : "#FFD700",
      },
    },
  },
  plugins: [],
}
export default config
