module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'consistent-return': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'max-statements-per-line': 'error',
    'multiline-comment-style': 'error',
    'new-cap': 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error'
  }
}
