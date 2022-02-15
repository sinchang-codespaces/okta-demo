/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ISSUER: string
  readonly VITE_REDIRECT_URI: string
  readonly VITE_CLIENT_ID: string
  readonly VITE_USER_API_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
