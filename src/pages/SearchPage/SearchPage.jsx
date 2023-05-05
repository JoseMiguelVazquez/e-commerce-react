import { useSearchContext } from '@/context/SearchContext'
import ItemCard from '@/components/ItemCard'
import './searchPage.css'

const SearchPage = () => {
  const { searchItems } = useSearchContext()

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
