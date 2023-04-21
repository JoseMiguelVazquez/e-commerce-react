import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ItemDetails = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/items/${id}`)
      .then(response => {
        setItem(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='container'>
        <div>
          <img src={item.image} alt='' />
        </div>
        <h1>{item.product_name}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button className='btn btn-primary'>Comprar</button>
      </div>
    </div>
  )
}

export default ItemDetails
