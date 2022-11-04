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
      }
    }
  }
}
