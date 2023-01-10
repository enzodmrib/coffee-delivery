import { ShoppingCart } from 'phosphor-react'

import { Product } from '../../constants/Products'
import { CardButtons, CardContainer, CardImage, CardTags } from './styles'

interface ProductCardProps {
  item: Product
}

export function ProductCard({ item }: ProductCardProps) {
  const { imgPath, name, description, price, tags } = item
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
          R$
          <strong>{price}</strong>
        </span>
        <input type="number" />
        <button>
          <ShoppingCart size={22} />
        </button>
      </CardButtons>
    </CardContainer>
  )
}
