import { SubtotalContainer } from './styles'

export function Subtotal() {
  return (
    <SubtotalContainer>
      <p>
        <span>Total de itens</span>
        <span>VALOR</span>
      </p>
      <p>
        <span>Entrega</span>
        <span>VALOR</span>
      </p>
      <strong>
        <span>Total</span>
        <span>VALOR</span>
      </strong>
    </SubtotalContainer>
  )
}
