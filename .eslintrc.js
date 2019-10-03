module.exports = {
  extends: ['mcansh/typescript', 'plugin:import/typescript'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      typescript: {},
    },
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '__tests__/**/*',
          'test-utils/index.tsx',
          'types/jest-dom.d.ts',
        ],
      },
    ],
  },
};
