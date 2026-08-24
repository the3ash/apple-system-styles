import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, lazyPlugins } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    semi: false,
    singleQuote: true,
    sortTailwindcss: {},
  },
  lint: {
    plugins: ['react', 'typescript', 'unicorn'],
    env: {
      browser: true,
    },
    categories: {
      correctness: 'error',
      suspicious: 'warn',
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'typescript/no-explicit-any': 'warn',
      'react/rules-of-hooks': 'error',
      'react/exhaustive-deps': 'warn',
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
  },
  plugins: lazyPlugins(() => [react(), tailwindcss()]),
  resolve: {
    tsconfigPaths: true,
  },
})
