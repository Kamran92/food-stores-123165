const initialState = {
  menu: [],
  loading: true,
  itemsCart: [],
  totalCart: 0,
}

const searchIndex = (items, id) => items.findIndex((item) => item.id === id)
const total = (arr, title) => {
  const sum = arr.reduce((sum, item) => {
    return sum + item[title]
  }, 0)
  return sum
}
const itemAddToCart = (state, action) => {
  const {id} = action
  const {menu, itemsCart} = state
  const idx = searchIndex(itemsCart, id)

  if (idx === -1) {
    const item = menu.find((item) => item.id === id)
    const newItem = {
      count: 1,
      multiplePrices: item.price,
      title: item.title,
      price: item.price,
      url: item.url,
      id: item.id
    }

    return {
      ...state,
      itemsCart: [...itemsCart, newItem],
      totalCart: total(itemsCart, 'multiplePrices') + item.price
    }
  }

  if (idx > -1) {
    const item = itemsCart.find((item) => item.id === id)
    const count = item.count + 1
    const multiplePrices = item.price * count
    const newItem = {...item, count, multiplePrices}
    const before = itemsCart.slice(0, idx)
    const after = itemsCart.slice(idx + 1)
    return {
      ...state,
      itemsCart: [...before, newItem, ...after],
      totalCart: total(itemsCart, 'multiplePrices') + item.price
    }
  }
}
const itemDeleteFromCart = (state, action) => {
  const {itemsCart, totalCart} = state
  const {id} = action
  const idx = searchIndex(itemsCart, id)
  const before = itemsCart.slice(0, idx)
  const after = itemsCart.slice(idx + 1)
  const item = itemsCart[idx]
  const {multiplePrices} = item
  return {
    ...state,
    itemsCart: [...before, ...after],
    totalCart: totalCart - multiplePrices
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true
      }
    case 'ITEM_ADD_TO_CART':
      return itemAddToCart(state, action)
    case 'ITEM_DELETE_FROM_CART':
      return itemDeleteFromCart(state, action)
    default:
      return state
  }
}

export default reducer