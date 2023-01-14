import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
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

interface OrderSummaryData {
  address: Address
  paymentMethod: PaymentMethods
}
interface OrderContextData {
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
  const [address, setAddress] = useLocalStorage(
    '@coffee-delivery:address-state-1.0.0',
    {} as Address,
  )
  const [paymentMethod, setPaymentMethod] = useLocalStorage(
    '@coffee-delivery:payment-method-state-1.0.0',
    PaymentMethods.CREDIT_CARD,
  )

  function registerAddress(address: Address) {
    setAddress(address)
  }

  function changePaymentMethod(paymentMethod: PaymentMethods) {
    setPaymentMethod(paymentMethod)
  }

  return (
    <OrderContext.Provider
      value={{
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
