const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  plugins: [forms, typography],

  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)'
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)'
      },
      borderColor: {
        default: 'var(--color-border)'
      },
      animation: {
        jump: 'jump 1s infinite',
        'from-top': 'fromTop .5s'
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-10px)' },
          '40%': { transform: 'translateY(0)' }
        },
        fromTop: {
          '0%': { transform: 'translateY(-15px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    }
  }
}
