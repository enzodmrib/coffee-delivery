import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { SelectedItemCard } from '../SelectedItemCard'
import { SelectedItemsContainer } from './styles'

export function SelectedItems() {
  const { items } = useContext(CartContext)

  return (
    <SelectedItemsContainer>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <SelectedItemCard item={item} />

            <hr />
          </div>
        )
      })}
    </SelectedItemsContainer>
  )
}
