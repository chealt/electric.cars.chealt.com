const { eslintConfig } = require('@chealt/check');

module.exports = {
  ...eslintConfig,
  settings: {
    'import/resolver': 'parcel'
  },
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
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
