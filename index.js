module.exports = {
  extends: [
    'next',
    'plugin:jsx-a11y/strict',
    'plugin:react/jsx-runtime',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'sort-keys-fix',
    'unused-imports',
    '@typescript-eslint',
    'simple-import-sort',
    'typescript-sort-keys',
    'sort-destructure-keys',
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
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-unused-state': 'warn',
    'react/button-has-type': 'warn',
    'react/self-closing-comp': 'warn',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-sort-props': 'warn',
    'react/jsx-pascal-case': ['error', { allowNamespace: true, allowLeadingUnderscore: true }],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-no-useless-fragment': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
  },
}
