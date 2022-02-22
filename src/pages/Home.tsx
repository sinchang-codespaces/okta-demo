import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <p>Welcome Home Page</p>
      <img
        src='https://user-images.githubusercontent.com/3297859/154039772-04997c78-c4c6-4e5a-9590-99e23a065c1d.png'
        alt='cover image'
        style={{ width: '600px' }}
      />
      <ul>
        <li>
          <Link to='/about'>Go to About page</Link>
        </li>
        <li>
          <Link to='/public'>Go to Public page</Link>
        </li>
      </ul>
    </>
  )
}
