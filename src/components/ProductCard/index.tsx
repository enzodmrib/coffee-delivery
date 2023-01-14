import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import { Product } from '../../constants/Products'
import { CartContext } from '../../contexts/CartContext'
import { AmountInput } from '../AmountInput'
import {
  CardButtons,
  CardContainer,
  CardImage,
  CardPriceTag,
  CardTags,
} from './styles'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItemToCart } = useContext(CartContext)
  const [itemAmount, setItemAmount] = useState(1)
  // const inputRef = useRef<HTMLInputElement>(null)

  const { imgPath, name, description, price, tags } = product

  function handleChangeItemAmount(amount: number) {
    setItemAmount(amount)
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).formatToParts(price)

  const currency = formattedPrice[0].value

  const priceValue = `${formattedPrice[2].value}${formattedPrice[3].value}${formattedPrice[4].value}`

  return (
    <CardContainer>
      <CardImage src={imgPath} alt="" />
      <CardTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>
      <h4>{name}</h4>
      <p>{description}</p>
      <CardButtons>
        <CardPriceTag>
          <span>{currency}</span>
          &nbsp;
          <strong>{priceValue}</strong>
        </CardPriceTag>
        {/* <input type="number" ref={inputRef} min={1} step={1} defaultValue={1} /> */}
        <AmountInput value={itemAmount} onChange={handleChangeItemAmount} />
        <button
          id="add"
          title="Adicionar ao carrinho"
          onClick={() => addItemToCart(product, itemAmount)}
        >
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CardButtons>
    </CardContainer>
  )
}
