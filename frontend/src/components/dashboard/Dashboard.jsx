import { useEffect } from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('protected-view/')
        console.log('Success: ', response.data)
      } catch (error) {
        console.error('Error fetching data')
      }
    }
    fetchProtectedData()
  }, [])

  return (
    <main className='dashboard-page container'>
      <section className='dashboard-card'>
        <h1>Welcome to the Dashboard</h1>
        <p>
          You are now logged in. Explore!!
        </p>

        <div className='dashboard-actions'>
          <button type='button' className='dashboard-btn dashboard-btn-primary'>
            Manage Account
          </button>
          <button type='button' className='dashboard-btn dashboard-btn-secondary'>
            View Profile
          </button>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
