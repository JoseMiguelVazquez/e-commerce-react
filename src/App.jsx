import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/Navbar'
import RoutesIndex from '@/routes/RoutesIndex'
import { SearchProvider } from '@/context/SearchContext'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <RoutesIndex />
        </SearchProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
