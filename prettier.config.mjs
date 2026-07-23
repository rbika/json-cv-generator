/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // General options
  semi: false,
  singleQuote: true,

  // @ianvs/prettier-plugin-sort-imports options
  importOrder: [
    '^react$|^react/(.*)$',
    '^next$|^(next/(.*))$',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],

  // prettier-plugin-tailwindcss options
  tailwindFunctions: ['clsx', 'cva', 'cn'],
}

export default config
