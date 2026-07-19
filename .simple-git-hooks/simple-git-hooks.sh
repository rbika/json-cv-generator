#!/bin/sh
# Skip git hooks in production and CI
if [ "$NODE_ENV" = "production" ] || [ "$CI" = "true" ]; then
  exit 0
fi
npx simple-git-hooks ./.simple-git-hooks/simple-git-hooks.mjs
