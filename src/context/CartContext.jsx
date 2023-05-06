import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

function CartProvider (props) {
  const [shoppingCart, setShoppingCart] = useState([])
  const [openCart, setOpenCart] = useState(false)

  const values = {
    shoppingCart,
    setShoppingCart,
    openCart,
    setOpenCart
  }

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}

export {
  CartProvider,
  useCartContext
}
