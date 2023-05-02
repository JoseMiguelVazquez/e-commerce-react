import React from 'react'
import { Link } from 'react-router-dom'
import imageNotAvailable from '@/assets/Image-Not-Available.png'
import './itemCard.css'

const ItemCard = ({ id, imageUrl, name, price }) => {
  return (
    <Link
      to={`/items/${id}`}
      className='col m-1 p-0 text-decoration-none text-dark d-flex justify-content-center'
    >
      <div className='card card-container'>
        <div className='card-img-container d-flex justify-content-center p-2 mt-2'>
          <img
            className='item-image-sm'
            src={imageUrl || imageNotAvailable}
            alt='item'
          />
        </div>
        <div className='card-text-container d-flex flex-column justify-content-center px-3'>
          <h6>{name}</h6>
          <p>${price}.00</p>
        </div>
      </div>
    </Link>
  )
}

export default ItemCard
