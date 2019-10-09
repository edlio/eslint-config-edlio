module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended'
  ],
  rules: {
    'react/display-name': 'off',
  }
}
