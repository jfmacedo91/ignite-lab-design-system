import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TextProps {
  asChild?: boolean
  children: ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function Text({ asChild, children, className, size = 'default' }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={
      clsx("font-sans text-gray-100", {
        'text-default': size === 'default',
        'text-sm': size === 'sm',
        'text-md': size === 'lg',
      },
      className
      ) }
    >
      { children }
    </Component>
  )
}