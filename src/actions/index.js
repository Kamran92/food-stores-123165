const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  }
}

const itemAddToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    id
  }
}

const itemDeleteFromCart = (id) => {
  return {
    type: 'ITEM_DELETE_FROM_CART',
    id
  }
}



export {
  menuLoaded,
  menuRequested,
  itemAddToCart,
  itemDeleteFromCart,
}