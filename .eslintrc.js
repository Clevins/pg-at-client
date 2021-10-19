module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: false,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint'],
//   rules: {
//     'import/no-unresolved': 'off',
//     'import/extensions': 'off',
//     ' object-curly-newline': 'off',
//     'linebreak-style': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': ['error'],
//     'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
//     'react/jsx-props-no-spreading': 'off',
//   },
//   settings: {
//     react: {
//       version: '17.0.2',
//     },
//   },
// };
