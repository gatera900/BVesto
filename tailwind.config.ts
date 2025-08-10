import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        },
        neon: {
          green: '#22ff8b',
          blue: '#00d1ff',
          pink: '#ff4dff'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(34,255,139,0.15)',
        card: '0 6px 24px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl: '14px'
      }
    }
  },
  plugins: []
} satisfies Config


