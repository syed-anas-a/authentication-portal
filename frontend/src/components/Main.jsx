import Button from './Button'

const Main = () => {
  return (
    <main className='home-page container'>
      <section className='home-card'>
        <h1>Authentication Portal</h1>
        <p>
          A secure backend system implementing token-based authentication and 
          using Django REST Framework.
        </p>
        <Button text="Login to your Account" class="btn-outline-info" url="/dashboard" />
      </section>
    </main>
  )
}
 
export default Main
