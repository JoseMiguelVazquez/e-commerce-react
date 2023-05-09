import { useSearchContext } from '@/context/SearchContext'
import { useNavigate } from 'react-router-dom'
import ItemCard from '@/components/ItemCard'
import './searchPage.css'

const SearchPage = () => {
  const { searchItems } = useSearchContext()
  const navigate = useNavigate()

  return (
    <>
      <div className='container pt-4'>
        <div>
          <button className='btn' onClick={() => navigate(-1)}> &lt; Back</button>
        </div>
        <div className='row d-flex justify-content-center'>
          {searchItems.length === 0 &&
            <p className='mt-3'>No Items Matching your search</p>}
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
    </>
  )
}

export default SearchPage
