import React, { useEffect, useState } from 'react'
import { useSearchContext } from '@/context/SearchContext'
import ItemCard from '@/components/ItemCard'
import { getAllItems } from '@/services/itemServices'
import bannerImage from '@/assets/banner_img.jpg'
import './home.css'

const Home = () => {
  const { setSearchTerm } = useSearchContext()
  const [items, setItems] = useState([])

  useEffect(() => {
    setSearchTerm('')
    const fetchItemsData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItems(response.data)
        }
      } catch (error) {
        console.log('Ocurrió un error: ' + error.message)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <div>
        <img id='banner-img' src={bannerImage} alt='' />
      </div>
      <div className='container-fluid pt-4'>
        <h3>Only the best products</h3>
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
    </>
  )
}

export default Home
