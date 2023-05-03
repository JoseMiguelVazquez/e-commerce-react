import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './itemDetails.css'

const ItemDetails = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

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
      <div className='container-md mt-3'>
        <div>
          <button className='btn' onClick={() => navigate(-1)}> &lt; Back</button>
        </div>
        <div className='d-flex flex-column flex-sm-row mt-3'>
          <div className='px-3 mb-3 d-flex align-items-center'>
            <img className='item-image-md' src={item.image} alt='' />
          </div>
          <div className='mb-3'>
            <h1>{item.product_name}</h1>
            <p>{item.brand}</p>
            <h5>${item.price}.00</h5>
            <p>{item.description}</p>
            <button className='btn btn-custom'>Add to Cart</button>
          </div>
        </div>
        <div>
          <hr />
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste rerum aliquid libero corporis explicabo sit quod? Beatae odit vero minus eos. Quidem aspernatur distinctio, minus recusandae neque architecto, dicta aliquid atque labore quasi optio! Aliquam, impedit dolore, iste inventore officiis ex ab at cum veritatis blanditiis aspernatur, id minus? Inventore tempora error nihil reiciendis mollitia possimus labore alias accusantium nobis recusandae sequi nisi placeat consequatur commodi dignissimos sint consequuntur reprehenderit blanditiis, ullam nemo illo dolorem aspernatur esse laudantium! Repellat rerum a dicta accusamus tempora doloremque possimus, iure hic, laudantium assumenda odit unde dolorem voluptatum asperiores reprehenderit quae ea doloribus.</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
