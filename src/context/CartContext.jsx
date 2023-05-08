import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

function CartProvider (props) {
  const [shoppingCart, setShoppingCart] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)

  function calculateTotal () {
    setCartTotal(shoppingCart.reduce((accumulator, item) => accumulator + (parseInt(item.item.price) * item.quantity), 0))
  }

  const values = {
    shoppingCart,
    setShoppingCart,
    openCart,
    setOpenCart,
    calculateTotal,
    cartTotal,
    setCartTotal
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
