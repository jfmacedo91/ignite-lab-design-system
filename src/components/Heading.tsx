import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface HeadingProps {
  size?: 'default' | 'sm' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Heading({ size = 'default', children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component className={
      clsx("font-sans font-bold text-gray-100", {
        'text-xl': size === 'default',
        'text-lg': size === 'sm',
        'text-2xl': size === 'lg',
      }) }
    >
      { children }
    </Component>
  )
}