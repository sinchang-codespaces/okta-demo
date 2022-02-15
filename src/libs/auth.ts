import { OktaAuth, OktaAuthOptions } from '@okta/okta-auth-js'

const defaultOktaAuthOptions: OktaAuthOptions = {
  clientId: '0oa1m7abzpwIcrAES0h8',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  devMode: false,
  tokenManager: {
    storage: 'sessionStorage',
  },
}

interface IOktaAuth {
  client: OktaAuth | null
  init: () => OktaAuth
  getAccessToken: () => string | undefined
}
console.log(import.meta)
export const Auth: IOktaAuth = {
  client: null,
  init: () => {
    Auth.client = new OktaAuth({
      ...defaultOktaAuthOptions,
      issuer: import.meta.env.VITE_ISSUER as string,
      redirectUri: import.meta.env.VITE_REDIRECT_URI as string,
    })

    Auth.client.tokenManager.on(
      'renewed',
      (key: unknown, newToken, oldToken) => {
        console.log('Token with key', key, 'has been renewed')
        console.log('Old token:', oldToken)
        console.log('New token:', newToken)
      }
    )

    Auth.client.tokenManager.on('expired', (key: unknown, expiredToken) => {
      console.log('Token with key', key, ' has expired:')
      console.log(expiredToken)
    })

    if (!Auth.client.isLoginRedirect()) {
      Auth.client.setOriginalUri(window.location.href)
    }
    return Auth.client
  },
  getAccessToken: (): string | undefined => {
    if (!Auth.client) {
      throw new Error('Required to initial Okta first')
    }
    return Auth.client.getAccessToken()
  },
}
