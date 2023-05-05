import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSearchContext } from '@/context/SearchContext'
import { useAuthContext } from '@/context/AuthContext'
import './navbar.css'

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearchContext()
  const { isAuth, userPayload, logout } = useAuthContext()

  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary navbar-dark'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='#'>Navbar</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link disabled'>Disabled</NavLink>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <NavLink
              to='/search'
              className='btn-search'
              type='button'
            >Search
            </NavLink>
          </form>
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <NavLink className='nav-link dropdown-toggle' to='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Hello, {isAuth ? 'LOGED' : ('log in or sign up')}
              </NavLink>
              <ul className='dropdown-menu'>
                {isAuth
                  ? (
                    <>
                      <li><NavLink className='dropdown-item' to='/' onClick={logout}>Log Out</NavLink></li>
                    </>
                    )
                  : (
                    <>
                      <li><NavLink className='dropdown-item' to='/login'>Log In</NavLink></li>
                      <li><hr className='dropdown-divider' /></li>
                      <li><NavLink className='dropdown-item' to='/signup'>Sign Up</NavLink></li>
                    </>
                    )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
