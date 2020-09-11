module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: ['airbnb-typescript'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/camelcase': 'off',
    'jsx-a11y/accessible-emoji': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: { jest: true },
    },
  ],
};
