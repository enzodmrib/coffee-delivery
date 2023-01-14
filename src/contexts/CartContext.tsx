import { createContext, ReactNode } from 'react'
import { cartReducer } from '../components/reducers/cart/reducer'
import { Product } from '../constants/Products'
import { useLocalStorageWithReducer } from '../hooks/useLocalStorage'

export interface Item extends Product {
  amount: number
}
interface CartContextType {
  items: Item[]
  total: number
  addItemToCart: (product: Product, amount: number) => void
  changeItemAmount: (item: Item, amount: number) => void
  removeItem: (item: Item) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [items, dispatch] = useLocalStorageWithReducer(
    '@coffee-delivery:cart-state-1.0.0',
    cartReducer,
    [],
  )

  const total = items.reduce(
    (acc: number, item: Item) => acc + item.price * item.amount,
    0,
  )
  const cartItemsIds = items.map((item: Item) => item.id)

  function addItemToCart(product: Product, amount = 1) {
    if (cartItemsIds.includes(product.id)) {
      dispatch({
        type: 'INCREASE_ITEM_AMOUNT',
        payload: {
          itemId: product.id,
          amount,
        },
      })
    } else {
      dispatch({
        type: 'ADD_NEW_ITEM',
        payload: {
          item: { ...product, amount },
        },
      })
    }
  }

  function changeItemAmount(item: Item, amount: number) {
    if (cartItemsIds.includes(item.id)) {
      dispatch({
        type: 'CHANGE_ITEM_AMOUNT',
        payload: {
          itemId: item.id,
          amount,
        },
      })
    }
  }

  function removeItem(item: Item) {
    if (cartItemsIds.includes(item.id)) {
      dispatch({
        type: 'REMOVE_ITEM',
        payload: {
          itemId: item.id,
        },
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        addItemToCart,
        changeItemAmount,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
