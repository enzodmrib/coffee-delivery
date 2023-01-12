import { FormEvent, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderInputs } from './components/OrderInputs'
import { SelectedCoffees } from './components/SelectedCoffees'
import { Subtotal } from './components/Subtotal'

import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutInfoContainer,
} from './styles'
import { OrderContext } from '../../contexts/OrderContext'

const newOrderFormValidationSchema = zod.object({
  zip: zod.string().length(9),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  federationalUnit: zod.string().min(2, 'Informe a UF'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { order, registerAddress } = useContext(OrderContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      federationalUnit: '',
    },
  })

  const { handleSubmit } = newOrderForm

  function submitOrder(data: NewOrderFormData) {
    registerAddress(data)

    console.log('Submitted!')
  }

  function eventHandleSubmit(event: FormEvent) {
    event.preventDefault()

    console.log('Submitted!', order)
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(submitOrder)}>
      <FormProvider {...newOrderForm}>
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
      </FormProvider>
    </CheckoutContainer>
  )
}
