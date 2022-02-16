import { http } from '../libs/http'

export type User = {
  sub: string
  name: string
  locale: string
  email: string
  preferredUsername: string
  givenName: string
  familyName: string
  zoneinfo: string
  updatedAt: number
  emailVerified: boolean
  adSAN: string
  adDN: string
  adUpn: string
  adEmail: string
}

export const fetchUser = async (): Promise<User> => {
  const { data } = await http.get<User>('/userinfo')
  return data
}
