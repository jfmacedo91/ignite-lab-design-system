import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: ReactNode
}

export function Button({ asChild, children, className, ...props }: ButtonProps) {
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
      `,
      className
      ) }
      { ...props }
    >
      { children }
    </Component>
  )
}