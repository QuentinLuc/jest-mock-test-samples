module.exports = {
  env: {
    "jest": true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "semi": 2
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
