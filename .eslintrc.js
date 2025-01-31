module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021, // 프로젝트에 맞는 ECMAScript 버전 설정
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
  ],
  plugins: [
    'vue',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', { 'trailingComma': 'none' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    'camelcase': 'off',
  }
};
