module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-param-reassign': 'off',
    'no-restricted-properties': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
