import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='
        flex items-center gap-3
        w-full px-4 py-3
        rounded
        bg-gray-800
        ring-cyan-300
        focus-within:ring-2
      '
    >
      { children }
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputTagProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputTag(props: TextInputTagProps) {
  return (
    <input
      className='
        flex-1
        text-sm leading-6 text-gray-100
        bg-transparent
        outline-none
        placeholder:text-gray-400
      '
      { ...props }
    />
  )
}

TextInputTag.displayName = 'TextInput.Tag'

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Tag: TextInputTag
}