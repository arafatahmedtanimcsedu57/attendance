// eslint.config.mjs
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx,js,mjs,cjs}'],
    ignores: ['**/dist/**', '**/.next/**', 'node_modules/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        project: false, // set to true + tsconfigRootDir if you later want project-aware rules
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // keep it minimal for now; we’ll tighten in later milestones
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
