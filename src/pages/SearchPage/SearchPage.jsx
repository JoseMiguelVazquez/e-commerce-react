import React, { useEffect, useState } from 'react'
import { useSearchContext } from '@/context/SearchContext'
import ItemCard from '@/components/ItemCard'
import axios from 'axios'
import './searchPage.css'

const SearchPage = () => {
  const searchContext = useSearchContext()
  const [searchItems, setSearchItems] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        setSearchItems(response.data.filter(item => {
          if (searchContext.searchTerm === '') {
            return item
          } else if (item.product_name.toLowerCase().includes(searchContext.searchTerm.toLowerCase())) {
            return item
          }
          return false
        }))
      }).catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='container pt-4'>
        <div className='row d-flex justify-content-center'>
          {searchItems.map((item) => (
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

export default SearchPage
