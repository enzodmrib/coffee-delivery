import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { TextIconContainer } from '../OrderInputs/styles'
import { OptionButton, OptionsContainer, SelectContainer } from './styles'

export function PaymentMethodSelect() {
  return (
    <SelectContainer>
      <TextIconContainer>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TextIconContainer>
      <OptionsContainer>
        <OptionButton type="button">
          <CreditCard size={16} color="#8047F8" />
          Cartão de crétido
        </OptionButton>
        <OptionButton type="button">
          <Bank size={16} color="#8047F8" />
          Cartão de débito
        </OptionButton>
        <OptionButton type="button">
          <Money size={16} color="#8047F8" />
          Dinheiro
        </OptionButton>
      </OptionsContainer>
    </SelectContainer>
  )
}
