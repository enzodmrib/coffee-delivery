import { createContext, ReactNode, useContext, useState } from 'react'
import { CartContext, Item } from './CartContext'

export enum PaymentMethods {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBT = 'DEBT',
  MONEY = 'MONEY',
}

interface Address {
  zip: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  federationalUnit: string
}

interface Order {
  address: Address
  paymentMethod: PaymentMethods
  total: number
  items: Item[]
}

interface OrderContextData {
  order: Order
  address: Address
  paymentMethod: PaymentMethods
  changePaymentMethod: (paymentMethod: PaymentMethods) => void
  registerAddress: (address: Address) => void
}

interface OrderContextProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProps) {
  const { items } = useContext(CartContext)

  const [address, setAddress] = useState({} as Address)
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethods.CREDIT_CARD)
  const order: Order = {
    address,
    paymentMethod,
    items,
    total: items.reduce((acc: number, item) => acc + item.price, 0),
  }

  function changePaymentMethod(paymentMethod: PaymentMethods) {
    setPaymentMethod(paymentMethod)
  }

  function registerAddress(address: Address) {
    setAddress(address)
  }

  console.log(order)

  return (
    <OrderContext.Provider
      value={{
        order,
        address,
        paymentMethod,
        changePaymentMethod,
        registerAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
