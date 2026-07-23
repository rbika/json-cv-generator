// Important!
// It's necessary to run `npm install` after editing this file so .git/hooks is updated.
const hooks = {
  'pre-commit': 'node_modules/.bin/lint-staged',
}

export default hooks
