import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'default' | 'sm' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({ size = 'default', children, asChild }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={
      clsx("font-sans text-gray-100", {
        'text-default': size === 'default',
        'text-sm': size === 'sm',
        'text-md': size === 'lg',
      }) }
    >
      { children }
    </Component>
  )
}