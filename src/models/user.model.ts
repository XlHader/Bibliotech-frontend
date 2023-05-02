export interface ApiUser {
  id: number,
  name: string,
  email: string,
  email_verified_at: string,
  created_at: string,
  updated_at: string,
  admin: boolean
}

export const ApiEmptyUser: ApiUser = {
  id: 0,
  name: '',
  email: '',
  email_verified_at: '',
  created_at: '',
  updated_at: '',
  admin: false
}

export interface User {
  id: number,
  name: string,
  email: string,
  admin: boolean
}

export const UserEmptyState: User = {
  id: 0,
  name: '',
  email: '',
  admin: false
}