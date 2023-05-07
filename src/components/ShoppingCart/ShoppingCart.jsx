import React from 'react'
import { useCartContext } from '@/context/CartContext'
import './shoppingCart.css'

const ShoppingCart = ({ show }) => {
  const { setOpenCart } = useCartContext()
  const { shoppingCart } = useCartContext()
  return (
    <div className={`shopping-cart ${show ? 'show-cart' : ''}`}>
      <h3 className='mt-3 text-center'>Shopping Cart</h3>
      <hr />
      <div className='shopping-products'>
        <ul>
          {shoppingCart.map(item => (
            <li key={item.item.id}>
              <p>{item.item.product_name}</p>
              <p>{item.item.price}.00</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
        <hr />
        <h5>Total: <span>0.00</span></h5>
      </div>
      <div className='checkout'>
        <button className='btn btn-custom'>CHECKOUT</button>
        <button className='btn btn-dark' onClick={() => setOpenCart(false)}>CLOSE</button>
      </div>
    </div>
  )
}

export default ShoppingCart
