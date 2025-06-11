export default {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    parserOptions: {
      ecmaVersion: 2020, // modern ECMAScript features
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',            // Base ESLint recommended rules
      'plugin:vue/vue3-recommended',   // Vue 3 recommended rules (for Vue 2, use 'plugin:vue/recommended')
      'plugin:prettier/recommended'      // Integrates Prettier with ESLint (this must be last)
    ],
    rules: {
      'vue/no-multiple-template-root': 'off'
    },
  };
  