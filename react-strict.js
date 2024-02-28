module.exports = {
  extends: ['edlio/react'],
  rules: {
    semi: 'error',
    complexity: 'error',
    curly: 'error',
    'id-length': [
      'error',
      { "exceptions": ["l", "e", "_"] }
    ],
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import .*',
      },
    ],
    'max-lines': ['error', 500],
    'max-params': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-nested-ternary': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': 'error',
  },
};
