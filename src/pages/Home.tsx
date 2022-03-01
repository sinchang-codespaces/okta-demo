import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <p>Welcome the home page</p>
      <img
        src='https://user-images.githubusercontent.com/3297859/154039772-04997c78-c4c6-4e5a-9590-99e23a065c1d.png'
        alt='cover image'
        style={{ width: '600px' }}
      />
      <p>
        <Link to='/protected'>Go to the protected page</Link>
      </p>
    </>
  )
}
