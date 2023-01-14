import { Minus, Plus } from 'phosphor-react'
import { AmountInputContainer } from './styles'

interface AmountInputProps {
  value: number
  onChange: (amount: number) => void
}

export function AmountInput({ value, onChange }: AmountInputProps) {
  return (
    <AmountInputContainer>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value === 1}
      >
        <Minus size={14} />
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => onChange(value + 1)}>
        <Plus size={14} />
      </button>
    </AmountInputContainer>
  )
}
