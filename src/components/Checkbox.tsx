import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {

  return (
    <RadixCheckbox.Root className='flex items-center justify-center w-6 h-6 bg-gray-800 rounded' { ...props }>
      <RadixCheckbox.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-cyan-500' />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}