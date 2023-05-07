import React from 'react'
import { useCartContext } from '@/context/CartContext'
import './shoppingCart.css'

const ShoppingCart = () => {
  const { setOpenCart } = useCartContext()
  return (
    <div className='shopping-cart'>
      <h3 className='mt-3 text-center'>Shopping Cart</h3>
      <hr />
      <div className='shopping-products'>
        <ul />
        <hr />
        <h5>Total: <span>0.00</span></h5>
      </div>
      <div className='checkout'>
        <button className='btn btn-custom'>Go to Pay</button>
        <button className='btn btn-dark' onClick={() => setOpenCart(false)}>Close</button>
      </div>
    </div>
  )
}

export default ShoppingCart
