import {useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <>
      <header className='site-header'>
        <nav className='site-nav container'>
          <Link className='site-brand' to='/'>
            AuthVault
          </Link>

          <div className='site-nav-links'>
            <NavLink
              className={({ isActive }) =>
                `site-nav-link${isActive ? ' active' : ''}`
              }
              to='/dashboard'
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `site-nav-link${isActive ? ' active' : ''}`
              }
              to='/login'
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `site-nav-link${isActive ? ' active' : ''}`
              }
              to='/register'
            >
              Register
            </NavLink>
            {isLoggedIn ? (
              <button className='site-nav-link site-nav-logout' onClick={handleLogout}>
                Logout
              </button>
            ) : null}
          </div>
        </nav>
      </header>
    </>
  ) 
}

export default Header
