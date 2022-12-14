import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Tag placeholder='Digite seu e-mail' />
    ]
  },
  argTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    }
  }
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Tag placeholder='Digite seu e-mail' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    }
  }
}