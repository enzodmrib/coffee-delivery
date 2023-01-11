import { FormEvent } from 'react'
import { OrderInputs } from './components/OrderInputs'
import { SelectedCoffees } from './components/SelectedCoffees'
import { Subtotal } from './components/Subtotal'
import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutInfoContainer,
} from './styles'

export function Checkout() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log('Submitted!')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit}>
      <CheckoutFormContainer>
        <h1>Complete seu pedido</h1>
        <OrderInputs />
      </CheckoutFormContainer>
      <CheckoutInfoContainer>
        <h1>Cafés selecionados</h1>
        <SelectedCoffees />
        <Subtotal />
        <button type="submit">Confirmar pedido</button>
      </CheckoutInfoContainer>
    </CheckoutContainer>
  )
}
