import { useOktaAuth } from '@okta/okta-react'
import { useEffect, useState } from 'react'
import { User, fetchUser } from '../services/users.service'

export const Header = () => {
  const { authState, oktaAuth } = useOktaAuth()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (!authState?.isAuthenticated) return
    const fetchData = async () => {
      const user = await fetchUser()
      setUser(user)
    }

    fetchData()
  }, [authState?.isAuthenticated])

  const logout = async () => {
    try {
      await oktaAuth.signOut()
    } catch (err) {
      throw err
    }
  }

  return (
    <div className='nav'>
      <div className='nav-left'>Okta Demo</div>
      {authState?.isAuthenticated ? (
        <div className='nav-right'>
          <div className='username'>{user?.name}</div>
          <div>
            <button id='logout-button' onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
