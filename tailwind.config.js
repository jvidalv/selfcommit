const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')
const fluidType = require("tailwindcss-fluid-type")

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  plugins: [forms, typography, fluidType],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    }
  }
}
