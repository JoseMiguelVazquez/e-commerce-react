import React from 'react'

const ShoppingCart = () => {
  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul />
      <div>
        <h5>Total: <span>0.00</span></h5>
      </div>
      <div className='checkout'>
        <div>Pay</div>
        <div>Close</div>
      </div>
    </div>
  )
}

export default ShoppingCart
