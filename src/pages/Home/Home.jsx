import React, { useEffect, useState } from 'react'
import ItemCard from '@/components/ItemCard'
import axios from 'axios'
import bannerImage from '@/assets/banner_img.jpg'
import './home.css'

const Home = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        setItems(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div>
        <img id='banner-img' src={bannerImage} alt='' />
      </div>
      <div className='container pt-4'>
        <div className='row d-flex justify-content-center'>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              imageUrl={item.image}
              name={item.product_name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
