import { ApiError, ApiUser, User } from "."

export interface AuthState {
  loading: boolean,
  user: User,
  token: string,
  error: ApiError,
  success: boolean
}

export interface AuthLoginRequestModel {
  email: string,
  password: string
}

export interface AuthLoginResponseModel {
  token: string,
  user: ApiUser
}