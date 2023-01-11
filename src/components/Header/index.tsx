import {
  AddressBadge,
  CartButton,
  HeaderAside,
  HeaderContainer,
  HeaderElements,
} from './styles'
import logo from '../../assets/logos/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { items } = useContext(CartContext)
  const navigate = useNavigate()

  const cartItemsAmount = items.length

  return (
    <HeaderContainer>
      <HeaderElements>
        <img src={logo} alt="" />
        <HeaderAside>
          <AddressBadge>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </AddressBadge>
          <CartButton onClick={() => navigate('/checkout')}>
            <ShoppingCart size={22} weight="fill" />
            {cartItemsAmount > 0 && <span>{cartItemsAmount}</span>}
          </CartButton>
        </HeaderAside>
      </HeaderElements>
    </HeaderContainer>
  )
}
