import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { SubtotalContainer } from './styles'

export function Subtotal() {
  const { total } = useContext(CartContext)

  const formattedItemsTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total)

  const deliveryPrice = 3.5

  const formattedDelivery = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(deliveryPrice)

  const subtotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total + deliveryPrice)

  return (
    <SubtotalContainer>
      <p>
        <span>Total de itens</span>
        <span>{formattedItemsTotal}</span>
      </p>
      <p>
        <span>Entrega</span>
        <span>{formattedDelivery}</span>
      </p>
      <strong>
        <span>Total</span>
        <span>{subtotal}</span>
      </strong>
    </SubtotalContainer>
  )
}
