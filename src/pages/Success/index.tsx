import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import motoboyImg from '@/assets/images/motoboy-image.svg'
import { IconContainer } from '../Home/components/Intro/styles'
import { GradientBox, OrderInfoBox, SuccessContainer } from './styles'

enum FormattedPaymentMethods {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBT = 'Débito',
  MONEY = 'Dinheiro',
}

export function Success() {
  const { address, paymentMethod } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <GradientBox>
          <OrderInfoBox>
            <li>
              <IconContainer backgroundColor="purple">
                <MapPin />
              </IconContainer>
              <div>
                <p>
                  Entrega em
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                </p>
                <p>
                  {address.district} - {address.city},{' '}
                  {address.federationalUnit}
                </p>
              </div>
            </li>

            <li>
              <IconContainer backgroundColor="yellow">
                <Timer />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </li>

            <li>
              <IconContainer backgroundColor="orange">
                <CurrencyDollar />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{FormattedPaymentMethods[paymentMethod]}</strong>
              </div>
            </li>
          </OrderInfoBox>
        </GradientBox>
        <img src={motoboyImg} alt="" />
      </div>
    </SuccessContainer>
  )
}
