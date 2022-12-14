import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Componente de Heading!',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: { size: 'default' }
}

export const Small: StoryObj<HeadingProps> = {
  args: { size: 'sm' }
}

export const Large: StoryObj<HeadingProps> = {
  args: { size: 'lg' }
}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Testando com a tag h1</h1>
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