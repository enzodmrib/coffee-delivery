import { ShoppingCart } from 'phosphor-react'
import { useContext, useRef } from 'react'

import { Product } from '../../constants/Products'
import { CartContext } from '../../contexts/CartContext'
import { CardButtons, CardContainer, CardImage, CardTags } from './styles'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItemToCart } = useContext(CartContext)
  const inputRef = useRef<HTMLInputElement>(null)

  const { imgPath, name, description, price, tags } = product

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
        <span>
          R$&nbsp;
          <strong>{price}</strong>
        </span>
        <input type="number" ref={inputRef} min={1} step={1} defaultValue={1} />
        <button
          title="Adicionar ao carrinho"
          onClick={(event) =>
            addItemToCart(product, Number(inputRef.current?.value))
          }
        >
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CardButtons>
    </CardContainer>
  )
}
