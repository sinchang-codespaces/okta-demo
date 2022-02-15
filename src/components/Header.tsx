import { useOktaAuth } from '@okta/okta-react'

export const Header = () => {
  const { authState, oktaAuth } = useOktaAuth()

  const logout = async () => {
    try {
      await oktaAuth.signOut()
    } catch (err) {
      throw err
    }
  }

  if (!authState) {
    return null
  }

  return authState.isAuthenticated ? (
    <button id='logout-button' onClick={logout}>
      Logout
    </button>
  ) : null
}
