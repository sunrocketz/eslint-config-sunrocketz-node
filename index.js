module.exports = {
  extends: ['plugin:typescript-sort-keys/recommended', 'prettier'],
  plugins: ['typescript-sort-keys', 'sort-keys-fix', 'sort-destructure-keys'],
  rules: {
    'indent': ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'quotes': [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'semi': ['warn', 'never'],
    'quote-props': ['warn', 'consistent'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
  },
}
