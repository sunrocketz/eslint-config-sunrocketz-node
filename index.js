module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
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
    'comma-dangle': ['warn', 'always-multiline'],
    'accessor-pairs': 'warn',
    'block-scoped-var': 'error',
    'default-case': 'error',
    'default-case-last': 'warn',
    'default-param-last': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'warn',
    'no-var': 'error',
    'no-eval': 'error',
    'no-alert': 'warn',
    'no-eq-null': 'warn',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'no-await-in-loop': 'error',
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-loss-of-precision': 'warn',
    'no-use-before-define': 'error',
    'no-template-curly-in-string': 'warn',
    'no-whitespace-before-property': 'warn',
    'require-await': 'error',
    'sort-vars': 'warn',
    'import/no-duplicates': 'warn',
    'import/first': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/newline-after-import': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'prefer-const': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'prefer-rest-params': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'symbol-description': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'node/no-unsupported-features/es-syntax': 'off',
  },
}
