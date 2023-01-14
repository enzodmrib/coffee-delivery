import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { AmountInput } from '../../../../components/AmountInput'
import { CartContext, Item } from '../../../../contexts/CartContext'
import {
  RemoveItemButton,
  SelectedItemCardContainer,
  SelectedItemCardOptions,
} from './styles'

interface SelecteItemCardProps {
  item: Item
}

export function SelectedItemCard({ item }: SelecteItemCardProps) {
  const { changeItemAmount, removeItem } = useContext(CartContext)
  const { imgPath, name, amount, price } = item

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price * amount)

  return (
    <SelectedItemCardContainer>
      <div>
        <img src={imgPath} alt="" />
        <div>
          <span>{name}</span>
          <SelectedItemCardOptions>
            {/* <input type="number" min={1} defaultValue={amount} step={1} /> */}
            <AmountInput
              value={amount}
              onChange={(amount) => changeItemAmount(item, amount)}
            />
            <RemoveItemButton type="button" onClick={() => removeItem(item)}>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveItemButton>
          </SelectedItemCardOptions>
        </div>
      </div>
      <strong>{formattedPrice}</strong>
    </SelectedItemCardContainer>
  )
}
