import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { User, fetchUser } from '../services/users.service'

export const Home = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUser()
      setUser(user)
    }

    fetchData()
  }, [])
  return (
    <>
      <Header />
      <p>Welcome Home Page, {user?.displayName}</p>
    </>
  )
}
