/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ISSUER: string
  readonly VITE_REDIRECT_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
