import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

// Create Context
const SearchContext = createContext()

// Create Provider (function)
function SearchProvider (props) {
  const [searchItems, setSearchItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        setSearchItems(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const values = {
    searchItems
  }

  return (
    <SearchContext.Provider value={values}>
      {props.children}
    </SearchContext.Provider>
  )
}

// Context consumer
// Grants access to the context info
const useSearchContext = () => {
  const context = useContext(SearchContext)
  return context
}

// Export context and provider
export {
  SearchProvider,
  useSearchContext
}

// Next: Go to a higher component and enclose components that will use the context
