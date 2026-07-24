/** @type {import('lint-staged').Configuration} */
const config = {
  '*.{ts,tsx}': ['npm run lint', 'npm run format', () => 'npm run test'],
  '*.{json,md,css,html,yml,yaml}': 'npm run format',
}

export default config
