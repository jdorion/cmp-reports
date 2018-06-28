module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  globals: {
    translations: false,
    window: false,
    document: false,
  },
  rules: {},
};
