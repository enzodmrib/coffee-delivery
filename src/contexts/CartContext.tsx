import { createContext, ReactNode, useReducer, useState } from 'react'
import { Product } from '../constants/Products'

interface Item extends Product {
  amount: number
}

export enum PaymentMethods {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBT = 'DEBT',
  MONEY = 'MONEY',
}

interface CartContextType {
  items: Item[]
  addItemToCart: (product: Product, amount: number) => void
  changeItemAmount: (product: Product, amount: number) => void
  removeItem: (product: Product) => void
  paymentMethod: PaymentMethods
  changePaymentMethod: (paymentMethod: PaymentMethods) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethods.CREDIT_CARD)
  const [items, dispatch] = useReducer((state: Item[], action: any) => {
    if (action.type === 'ADD_NEW_ITEM') {
      return [...state, action.payload.item]
    }

    if (action.type === 'INCREASE_ITEM_AMOUNT') {
      return state.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, amount: item.amount + action.payload.amount }
        } else {
          return item
        }
      })
    }

    if (action.type === 'CHANGE_ITEM_AMOUNT') {
      return state.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, amount: action.payload.amount }
        } else {
          return item
        }
      })
    }

    if (action.type === 'REMOVE_ITEM') {
      if (action.payload.amount === 0) {
        return state.filter((item) => action.payload.itemId !== item.id)
      }
    }

    return state
  }, [])

  const cartItemsIds = items.map((item) => item.id)

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

  function changeItemAmount(product: Product, amount: number) {
    if (cartItemsIds.includes(product.id)) {
      dispatch({
        type: 'CHANGE_ITEM_AMOUNT',
        payload: {
          itemId: product.id,
          amount,
        },
      })
    }
  }

  function removeItem(product: Product) {
    if (cartItemsIds.includes(product.id)) {
      dispatch({
        type: 'REMOVE_ITEM',
        payload: {
          itemId: product.id,
        },
      })
    }
  }

  function changePaymentMethod(paymentMethod: PaymentMethods) {
    setPaymentMethod(paymentMethod)
  }

  // console.log(items)

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        changeItemAmount,
        removeItem,
        paymentMethod,
        changePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
