// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    typescript: true,
    vue: true,
    md: true,
    stylistic: false,
    lessOpinionated: true
  },
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      'vue/block-order': 0,
      'no-console': 0,
      'node/prefer-global/process': 0,
      'function-paren-newline': ['error', 'multiline'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true
        }
      ]
    }
  }
)
