import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/Navbar'
import RoutesIndex from '@/routes/RoutesIndex'
import { SearchProvider } from '@/context/SearchContext'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <SearchProvider>
            <Navbar />
            <RoutesIndex />
          </SearchProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
