import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axiosInstance from '../axiosinstance'

const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    
    const userData = {
      username, email, password
    }
    
    try {
      const response = await axiosInstance.post('register/', userData)
      console.log('response data => ',response.data)
      console.log('Registration successful')
      setErrors({})
      setSuccess(true)
    } catch(error) {
      const responseErrors = error.response?.data || { detail: 'Registration failed' }
      setErrors(responseErrors)
      console.log('Registration error: ', responseErrors)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='auth-page container'>
      <section className='auth-card auth-card-register'>
        <h1>Create an Account</h1>
        <p>Enter your details to join the portal</p>

        <form className='auth-form' onSubmit={handleRegistration}>
          <div className='auth-field'>
            <label htmlFor='register-username'>Username</label>
            <input
              id='register-username'
              type='text'
              placeholder='johndoe'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.username ? <p className='auth-error'>{errors.username}</p> : null}
          </div>

          <div className='auth-field'>
            <label htmlFor='register-email'>Email Address</label>
            <input
              id='register-email'
              type='email'
              placeholder='name@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email ? <p className='auth-error'>{errors.email}</p> : null}
          </div>

          <div className='auth-field'>
            <label htmlFor='register-password'>Set Password</label>
            <input
              id='register-password'
              type='password'
              placeholder='........'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password ? <p className='auth-error'>{errors.password}</p> : null}
          </div>

          {success ? <p className='auth-success'>Registration successful</p> : null}
          {errors.detail ? <p className='auth-error'>{errors.detail}</p> : null}

          <button type='submit' className='auth-submit auth-submit-register' disabled={loading}>
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin /> Please wait...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <p className='auth-meta'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </section>
    </main>
  )
}

export default Register
