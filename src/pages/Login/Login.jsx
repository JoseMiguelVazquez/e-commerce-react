import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/userService'
import { useAuthContext } from '@/context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        console.log('Usuario Autorizado: ', response.data.token)
        login(response.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrió un error: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <div>
      <div className='container mt-4'>
        <div>
          <h2>Sign In</h2>
          <h5>Enter your login credentials</h5>
          <hr />
        </div>
        <form
          onSubmit={handleSubmit}
        >
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
          <button className='btn btn-custom' type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
