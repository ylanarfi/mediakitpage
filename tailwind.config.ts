import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      backgroundColor: {
        page: 'rgb(var(--background) / <alpha-value>)',
        card: 'rgb(var(--card-bg) / <alpha-value>)',
        'card-hover': 'rgb(var(--card-hover) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

export default config