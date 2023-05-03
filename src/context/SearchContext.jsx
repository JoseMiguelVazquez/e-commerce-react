import { createContext, useState, useContext } from 'react'
// import axios from 'axios'

// Create Context
const SearchContext = createContext()

// Create Provider (function)
function SearchProvider (props) {
  const [searchTerm, setSearchTerm] = useState('')

  const values = {
    searchTerm,
    setSearchTerm
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
