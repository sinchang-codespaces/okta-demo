import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <p>Welcome Home Page</p>
      <p>
        <Link to='/about'>Go to About page</Link>
      </p>
    </>
  )
}
