import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  appBorderRadius: 5,
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  textInverseColor: 'rgba(255,255,255,0.9)',
  barBg: '#F5F5F5',
  inputBorderRadius: 4
})

export const parameters = {
  actions: {
    theme,
    argTypesRegex: '^on[A-Z].*'
  },
  docs: {
    theme,
  },
  controls: {
    theme,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
