import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component className={
      clsx(`
        w-full py-3 px-4
        font-semibold text-gray-900
        rounded
        bg-cyan-500
        hover:bg-cyan-300
        focus:ring-2
        ring-white
        transition-colors
      `) }
    >
      { children }
    </Component>
  )
}