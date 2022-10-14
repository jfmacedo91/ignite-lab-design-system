import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface HeadingProps {
  asChild?: boolean
  children: ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function Heading({ asChild, children, className, size = 'default' }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component className={
      clsx("font-sans font-bold text-gray-100", {
        'text-xl': size === 'default',
        'text-lg': size === 'sm',
        'text-2xl': size === 'lg',
      },
      className
      ) }
    >
      { children }
    </Component>
  )
}