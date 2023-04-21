import React from 'react'
import useForm from '../hooks/useForm'

const Signup = () => {
  const defaults = {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    role: ''
  }

  const sendData = (data) => {
    console.log(data)
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, defaults)

  return (
    <div>
      <div className='container'>
        <form
          className='d-flex flex-column'
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <label className='form-label' htmlFor='first_name'>First Name</label>
            <input
              className='form-control'
              type='text'
              name='first_name'
              placeholder='Your First Name'
              id='first_name'
              value={input.first_name}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='last_name'>Last Name</label>
            <input
              className='form-control'
              type='text'
              name='last_name'
              placeholder='Your Last Name'
              id='last_name'
              value={input.last_name}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='gender'>Gender</label>
            <select className='form-select' name='gender' id='gender' value={input.gender} onChange={handleInputChange}>
              <option value=''>Choose your gender</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
              <option value='O'>Other</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Email</label>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='email@mail.com'
              id='email'
              value={input.email}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input
              className='form-control'
              type='password'
              name='password'
              placeholder='Write Your Password'
              id='password'
              value={input.password}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='role'>Role</label>
            <select className='form-select' name='role' id='role' value={input.role} onChange={handleInputChange}>
              <option value=''>Choose a role</option>
              <option value='CUSTOMER'>Customer</option>
              <option value='ADMIN'>Admin</option>
            </select>
          </div>
          <button className='btn btn-primary' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
