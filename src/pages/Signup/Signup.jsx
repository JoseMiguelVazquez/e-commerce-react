import { useNavigate } from 'react-router-dom'
import React from 'react'
import useForm from '@/hooks/useForm'
import { registerUserService } from '@/services/userService'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('Usuario creado: ', response)
        navigate('/login')
      }
    } catch (error) {
      console.log('Ocurrió un error: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    role: ''
  })

  return (
    <div>
      <div className='container mt-4'>
        <div>
          <h2>Sign Up</h2>
          <h5>It's free and takes less than 30 seconds</h5>
          <hr />
        </div>
        <form
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
          <button className='btn btn-custom' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
