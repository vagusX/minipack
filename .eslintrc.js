module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-loop-func': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        'bracketSpacing': false,
        'singleQuote': true,
        'trailingComma': 'all'
      }
    ]
  }
}