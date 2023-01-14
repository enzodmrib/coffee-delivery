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
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { items } = useContext(CartContext)
  const { address } = useContext(OrderContext)
  const navigate = useNavigate()

  const cartItemsAmount = items.length

  return (
    <HeaderContainer>
      <HeaderElements>
        <img src={logo} alt="" onClick={() => navigate('/')} />
        <HeaderAside>
          {address.city && (
            <AddressBadge>
              <MapPin size={22} weight="fill" />
              <span>
                {address.city}, {address.federationalUnit}
              </span>
            </AddressBadge>
          )}
          <CartButton onClick={() => navigate('/checkout')}>
            <ShoppingCart size={22} weight="fill" />
            {cartItemsAmount > 0 && <span>{cartItemsAmount}</span>}
          </CartButton>
        </HeaderAside>
      </HeaderElements>
    </HeaderContainer>
  )
}
