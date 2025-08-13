// eslint.config.js (flat, compatible ESLint 9)
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default tseslint.config([
    // remplace .eslintignore
    { ignores: ['dist/**', 'build/**', 'node_modules/**'] },

    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        // presets FLAT uniquement
        extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node }
        },
        // 👉 plugins en objet (flat)
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        settings: { react: { version: 'detect' } },
        rules: {
            // Tes règles “style”
            'no-var': 'error',
            'prefer-const': 'warn',
            curly: 'warn',
            'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }],
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'no-trailing-spaces': 'warn',
            'space-before-blocks': ['error', 'always'],
            'keyword-spacing': ['error', { before: true, after: true }],

            // React/TS
            'react/react-in-jsx-scope': 'off', // React 17+
            'react/prop-types': 'off', // on est en TS

            // Hooks (équivalent du preset recommandé)
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Vite React Refresh (équivalent du preset vite)
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
        }
    }
]);
