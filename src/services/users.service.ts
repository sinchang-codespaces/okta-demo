import { http } from '../libs/http'

export type User = {
  displayName: string
  roleList: string[]
  functionList: string[]
}

export const fetchUser = async (): Promise<User> => {
  const { data } = await http.get<User>('/promomanager/userinfo')
  return data
}
