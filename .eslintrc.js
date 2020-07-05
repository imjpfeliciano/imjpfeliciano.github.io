module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    quotes: ['error', 'single'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off'
  }
};
