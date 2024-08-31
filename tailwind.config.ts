import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wed1: '#FEF3E2',
        wed2: '#BEC6A0',
        wed3: '#708871',
        wed4: '#606676',
      },
    },
  },
  plugins: [],
}
export default config
