module.exports = {
  env: {
    browser: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["edlio/common", "plugin:react/recommended"],
  rules: {
    "react/display-name": "off",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/sort-comp": "error",
    semi: "error",
    complexity: "error",
    curly: "error",
    "id-length": "error",
    "max-depth": "error",
    "max-len": ["error"],
    "max-lines": ["error", 350],
    "max-params": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-nested-ternary": "error",
    "no-else-return": "error",
    "no-implicit-coercion": "error",
  },
};
