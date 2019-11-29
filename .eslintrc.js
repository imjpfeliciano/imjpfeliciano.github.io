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
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    quotes: ['error', 'single'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: [
          '.js',
          '.vue',
        ],
      },
    },
  },
};
