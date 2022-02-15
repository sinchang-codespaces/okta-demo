import './App.css'
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Route, useHistory } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Auth } from './libs/auth'

function App() {
  const history = useHistory()
  const oktaAuthClient = Auth.init()

  const restoreOriginalUri = async (
    _oktaAuth: OktaAuth,
    originalUri: string
  ) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin))
  }

  const triggerLogin = async () => {
    await oktaAuthClient.signInWithRedirect()
  }

  const customAuthHandler = async () => {
    const previousAuthState =
      oktaAuthClient.authStateManager.getPreviousAuthState()
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      await triggerLogin()
    }
  }

  const onError = ({ error }: { error: Error }) => (
    <p>{error.message} Please contact DEV team.</p>
  )

  const onLoad = <p>Loading...</p>

  return (
    <Security
      oktaAuth={oktaAuthClient}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <SecureRoute exact path='/' component={Home} />
      <SecureRoute exact path='/about' component={About} />
      <Route
        path='/login/callback'
        render={(props: any) => (
          <LoginCallback
            {...props}
            errorComponent={onError}
            loadingElement={onLoad}
          />
        )}
      ></Route>
    </Security>
  )
}

export default App
