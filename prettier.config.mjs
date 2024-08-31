/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  singleAttributePerLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    './node_modules/prettier-plugin-sort-imports/dist/index.js',
  ],
  sortingMethod: 'alphabetical',
}

export default config
