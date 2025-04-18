import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const baseConfig = {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.expo/**',
    '**/coverage/**',
    '**/ios/**',
    '**/android/**',
  ],
  plugins: {
    prettier: pluginPrettier,
    tailwindcss: pluginTailwind,
    'unused-imports': pluginUnusedImports,
    'simple-import-sort': pluginSimpleImportSort,
    import: pluginImport,
    react: pluginReact,
    '@typescript-eslint': tseslint,
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    react: {
      version: '18.3.1',
    },
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
  },
};

const configFilesConfig = {
  files: ['**/*.config.js', '**/*.config.mjs', '**/*.config.ts', '.detoxrc.js'],
  languageOptions: {
    globals: {
      ...globals.node,
      module: 'readonly',
      require: 'readonly',
      exports: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
  },
};

const testFilesConfig = {
  files: [
    '**/e2e/**/*.{js,ts}',
    '**/*.e2e.{js,ts}',
    '**/*.test.{js,ts,jsx,tsx}',
    '**/jest.setup.{js,ts}',
  ],
  languageOptions: {
    globals: {
      ...globals.jest,
      ...globals.node,
    },
  },
};

export default defineConfig([
  js.configs.recommended,
  baseConfig,
  configFilesConfig,
  testFilesConfig,
]);
