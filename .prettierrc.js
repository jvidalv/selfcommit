module.exports = {
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  arrowParens: 'avoid',
  tabWidth: 2,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^(lib|store|hooks|graphql|domains)/(.*)$',
    '^components/(.*)$',
    '^[./]',
    '^css/(.*)$',
    '^data/(.*)$',
    '^types/(.*)$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
