const { eslintConfig } = require('@chealt/check');

module.exports = {
  ...eslintConfig,
  overrides: [
    {
      files: ['**/*.jsx'],
      extends: ['plugin:react/recommended'],
      plugins: ['react', 'react-hooks'],
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
  ]
};
