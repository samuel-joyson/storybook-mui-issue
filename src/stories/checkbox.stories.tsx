import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { CheckboxComponent } from './checkbox'

export default {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CheckboxComponent>

const Template: ComponentStory<typeof CheckboxComponent> = (args) => <CheckboxComponent />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
