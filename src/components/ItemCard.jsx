import React from 'react'
import { Link } from 'react-router-dom'
import imageNotAvailable from '../assets/Image-Not-Available.png'

const ItemCard = ({ id, imageUrl, name, price }) => {
  return (
    <Link
      to={`/items/${id}`}
      className='col m-1'
    >
      <div className='card'>
        <div>
          <img
            className='item-image-sm'
            src={imageUrl || imageNotAvailable}
            alt='item'
          />
        </div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  )
}

export default ItemCard
