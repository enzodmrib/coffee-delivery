import { MapPinLine } from 'phosphor-react'
import { PaymentMethodSelect } from '../PaymentMethodSelect'
import {
  AddressFormFieldsContainer,
  Input,
  InputsContainer,
  OrderInputsContainer,
  TextIconContainer,
} from './styles'

export function OrderInputs() {
  return (
    <OrderInputsContainer>
      <AddressFormFieldsContainer>
        <TextIconContainer>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </TextIconContainer>
        <InputsContainer>
          <Input type="number" placeholder="CEP" required />
          <Input type="text" placeholder="Rua" required aria-colspan={3} />
          <Input type="number" placeholder="Número" required />
          <Input type="text" placeholder="Complemento" aria-colspan={2} />
          <Input type="text" placeholder="Bairro" required />
          <Input type="text" placeholder="Cidade" required />
          <Input type="text" placeholder="UF" required maxLength={2} />
        </InputsContainer>
      </AddressFormFieldsContainer>
      <PaymentMethodSelect />
    </OrderInputsContainer>
  )
}
