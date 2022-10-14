import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-screen h-screen text-gray-100 bg-gray-900'>
      <header className='flex flex-col items-center gap-2'>
        <Logo />
        <Heading asChild size='lg'>
          <h1>Ignite Lab</h1>
        </Heading>
        <Text size='lg' className='text-gray-400'>
          Faça seu login e comece a usar!
        </Text>
      </header>
      <form className='flex flex-col gap-4 w-full max-w-sm'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Tag type='email' id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua Senha:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Tag type='password' id='password' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-400'>Mantenha-me conectado por 30 dias.</Text>
        </label>
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-4'>
        <Text asChild size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="#">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="#">Não possui uma conta? Crie agora mesmo.</a>
        </Text>
      </footer>
    </div>
  )
}