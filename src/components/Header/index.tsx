import {
  AddressBadge,
  CartButton,
  HeaderAside,
  HeaderContainer,
  HeaderElements,
} from './styles'
import logo from '../../assets/logos/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  const cartItems = []

  const cartItemsAmount = cartItems.length
  return (
    <HeaderContainer>
      <HeaderElements>
        <img src={logo} alt="" />
        <HeaderAside>
          <AddressBadge>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </AddressBadge>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {cartItemsAmount > 0 && <span>{cartItemsAmount}</span>}
          </CartButton>
        </HeaderAside>
      </HeaderElements>
    </HeaderContainer>
  )
}
