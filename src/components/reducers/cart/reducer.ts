import { Item } from '../../../contexts/CartContext'

export enum CartActions {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  INCREASE_ITEM_AMOUNT = 'INCREASE_ITEM_AMOUNT',
  CHANGE_ITEM_AMOUNT = 'CHANGE_ITEM_AMOUNT',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function cartReducer(state: Item[], action: any) {
  if (action.type === CartActions.ADD_NEW_ITEM) {
    return [...state, action.payload.item]
  }

  if (action.type === CartActions.INCREASE_ITEM_AMOUNT) {
    return state.map((item) => {
      if (item.id === action.payload.itemId) {
        return { ...item, amount: item.amount + action.payload.amount }
      } else {
        return item
      }
    })
  }

  if (action.type === CartActions.CHANGE_ITEM_AMOUNT) {
    return state.map((item) => {
      if (item.id === action.payload.itemId) {
        return { ...item, amount: action.payload.amount }
      } else {
        return item
      }
    })
  }

  if (action.type === CartActions.REMOVE_ITEM) {
    return state.filter((item) => action.payload.itemId !== item.id)
  }

  return state
}
