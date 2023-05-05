import React, { useEffect, useState } from 'react'
import { useSearchContext } from '@/context/SearchContext'
import ItemCard from '@/components/ItemCard'
import { getAllItems } from '@/services/itemServices'
import './searchPage.css'

const SearchPage = () => {
  const { searchTerm } = useSearchContext()
  const [searchItems, setSearchItems] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setSearchItems(response.data.filter(item => {
            if (searchTerm === '') {
              return item
            } else if (item.product_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item
            }
            return false
          }))
        }
      } catch (error) {
        console.log('Ocurrió un error: ' + error.message)
      }
    }
    fetchItemsData()
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
