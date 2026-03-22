import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import axiosInstance from '../axiosinstance'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const userData = {username, password}
    console.log("Userdata => ", userData)

    try {
      const response = await axiosInstance.post('token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      console.log('Login successful')
      setIsLoggedIn(true)
      navigate('/dashboard')

    } catch(error) {
      console.error('Login failed', error)
      setError(error.response?.data?.detail || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='auth-page container'>
      <section className='auth-card auth-card-login'>
        <h1>Login to our Portal</h1>
        <p>Enter your credentials to access your terminal</p>

        <form className='auth-form' onSubmit={handleLogin}>
          <div className='auth-field'>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className='auth-field'>
            <div className='auth-field-row'>
              <label htmlFor='password'>Password</label>
              <button type='button' className='auth-inline-link'>
                Forgot?
              </button>
            </div>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error ? <p className='auth-error'>{error}</p> : null}

          <button type='submit' className='auth-submit' disabled={loading}>
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p className='auth-meta'>
          Don&apos;t have an account? <Link to='/register'>Register</Link>
        </p>
      </section>
    </main>
  )
}

export default Login 
