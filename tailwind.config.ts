import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        'brand-400': '#F16822',
        'brand-600': '#E03000',
        'brand-200': '#FDA733',
        'brand-800': '#31832B',
        'cream': '#FFF0DB',
        'plugin-bg': '#232323',
        bg: '#1D1A1A',
      },
      fontSize: {
        '9xl': [
          '5rem', {
            lineHeight: '5.625rem',
            letterSpacing: '-0.07rem'
          }
        ],
        '6xl': [
          '3.5rem', {
            lineHeight: '3.6rem',
            letterSpacing: '-0.07rem'
          }
        ],
        '3xl': [
          '1.85rem', {
            lineHeight: '2rem',
            letterSpacing: '-0.01rem'
          }
        ],
        '2xl': [
          '1.5rem', {
            lineHeight: '1.7rem',
            letterSpacing: '0.01rem',
            fontWeight: '300'
          }
        ],
  
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-nm)'],
      }
    },
  },
  plugins: [],
}
export default config
