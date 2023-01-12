import { MapPinLine } from 'phosphor-react'
import Input from '../../../../components/Input'
import { PaymentMethodSelect } from '../PaymentMethodSelect'
import {
  AddressFormFieldsContainer,
  InputsContainer,
  OrderInputsContainer,
  TextIconContainer,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function OrderInputs() {
  const { register } = useFormContext()

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
          <Input.Masked
            id="zip"
            placeholder="CEP"
            required
            maxLength={9}
            registerField="zip"
          />
          <Input.Default
            id="street"
            type="text"
            placeholder="Rua"
            required
            aria-colspan={3}
            registerField="street"
          />
          <Input.Default
            id="number"
            type="number"
            placeholder="Número"
            required
            registerField="number"
          />
          <Input.Optional
            id="complement"
            type="text"
            placeholder="Complemento"
            aria-colspan={2}
            registerField="complement"
          />
          <Input.Default
            id="district"
            type="text"
            placeholder="Bairro"
            required
            registerField="district"
          />
          <Input.Default
            id="city"
            type="text"
            placeholder="Cidade"
            required
            registerField="city"
          />
          <Input.Default
            id="federationalUnit"
            type="text"
            placeholder="UF"
            required
            maxLength={2}
            registerField="federationalUnit"
          />
        </InputsContainer>
      </AddressFormFieldsContainer>
      <PaymentMethodSelect />
    </OrderInputsContainer>
  )
}
