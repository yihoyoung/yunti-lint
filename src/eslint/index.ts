import eslintConfigPrettier from 'eslint-config-prettier';

export const eslint = {
  $schema: 'https://json.schemastore.org/eslintrc',
  extends: [
    'eslint:recommended',
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:unicorn/recommended',
  ],
  plugins: ['unicorn', 'import', 'unused-imports', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-unused-vars': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'unicorn/explicit-length-check': 'warn',
    'unicorn/filename-case': 0,
    'unicorn/no-array-for-each': 'warn',
    'unicorn/no-array-reduce': 0,
    'unicorn/no-empty-file': 'warn',
    'unicorn/no-negated-condition': 'warn',
    'unicorn/no-nested-ternary': 0,
    'unicorn/no-typeof-undefined': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-code-point': 'warn',
    'unicorn/prefer-logical-operator-over-ternary': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/prefer-type-error': 'warn',
    'unicorn/prevent-abbreviations': 0,
    'unicorn/switch-case-braces': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
    // ~ change some rules to warn which can be automatically fixed by the `--fix` CLI option
    'unicorn/better-regex': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/catch-error-name': 'warn',
    'unicorn/prefer-export-from': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/no-lonely-if': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unicorn/text-encoding-identifier-case': 'warn',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/numeric-separators-style': 'warn',
    'unicorn/prefer-at': 'warn',
    'unicorn/no-useless-fallback-in-spread': 'warn',
    'unicorn/prefer-date-now': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-unreadable-iife': 'warn',
    'no-param-reassign': ['warn'],
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-no-useless-fragment': 'off',
    // ~ merge from eslint-config-tenx
    'unicorn/consistent-destructuring': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-top-level-await': 0,
    'strict': [0],
    'no-sequences': [0],
    'no-mixed-operators': [0],
    'no-useless-escape': [0],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'semi': 'off',
    'array-bracket-spacing': 'off',
    'max-len': [
      'error',
      100,
      {
        comments: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-nested-ternary': ['error'],
    'no-debugger': ['error'],
    'no-console': [
      'error',
      {
        allow: ['warn'],
      },
    ],
    'no-shadow': ['warn'],
    'prefer-promise-reject-errors': [
      'warn',
      {
        allowEmptyReject: true,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-key': 'error',
    ...eslintConfigPrettier.rules,
  },
  globals: {
    __root__dirname: true,
    Cookies: true,
    fetchMock: true,
    mockStore: true,
    initStore: true,
  },
};
