import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext, PaymentMethods } from '../../../../contexts/OrderContext'
import { TextIconContainer } from '../OrderInputs/styles'
import { OptionButton, OptionsContainer, SelectContainer } from './styles'

export function PaymentMethodSelect() {
  const { paymentMethod, changePaymentMethod } = useContext(OrderContext)

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
        <OptionButton
          type="button"
          selected={paymentMethod === PaymentMethods.CREDIT_CARD}
          onClick={() => changePaymentMethod(PaymentMethods.CREDIT_CARD)}
        >
          <CreditCard size={16} color="#8047F8" />
          Cartão de crétido
        </OptionButton>
        <OptionButton
          type="button"
          selected={paymentMethod === PaymentMethods.DEBT}
          onClick={() => changePaymentMethod(PaymentMethods.DEBT)}
        >
          <Bank size={16} color="#8047F8" />
          Cartão de débito
        </OptionButton>
        <OptionButton
          type="button"
          selected={paymentMethod === PaymentMethods.MONEY}
          onClick={() => changePaymentMethod(PaymentMethods.MONEY)}
        >
          <Money size={16} color="#8047F8" />
          Dinheiro
        </OptionButton>
      </OptionsContainer>
    </SelectContainer>
  )
}
