import { FormEvent, InputHTMLAttributes, useCallback } from 'react'
import { InputContainer, TextInput } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  registerField: string
}

function Default({ registerField, ...props }: InputProps) {
  const { register } = useFormContext()

  return <TextInput {...props} {...register(registerField)} />
}

function Optional({ registerField, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <TextInput {...props} {...register(registerField)} />
      <i>Opcional</i>
    </InputContainer>
  )
}

function Masked({ registerField, ...props }: InputProps) {
  const { register } = useFormContext()

  const handleKeyDown = useCallback((event: FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    event.currentTarget.value = value
  }, [])

  return (
    <TextInput
      {...props}
      onKeyDown={handleKeyDown}
      {...register(registerField)}
    />
  )
}

export default {
  Default,
  Optional,
  Masked,
}
