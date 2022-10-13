import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Componente de texto padrão!',
    size: 'default'
  },
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: { size: 'default' }
}

export const Small: StoryObj<TextProps> = {
  args: { size: 'sm' }
}

export const Large: StoryObj<TextProps> = {
  args: { size: 'lg' }
}

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Testando com a tag p</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    },
    asChild: {
      table: {
        disable: true 
      }
    }
  }
}