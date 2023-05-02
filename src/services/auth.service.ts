import { SerializedError, createAsyncThunk } from "@reduxjs/toolkit"
import { privateAxios } from "../api"
import { getLocalStorageItem } from "../utilities"
import { ApiUser, AuthLoginRequestModel, AuthLoginResponseModel } from "../models"

interface rejectWithValue {
  rejectWithValue: (value: SerializedError) => void
}

const loginRequest = async ({ email, password }: AuthLoginRequestModel, { rejectWithValue }: rejectWithValue) => {
  try {
    const { data } = await privateAxios.post<AuthLoginResponseModel>('/api/login', { email, password })
    return data
  } catch (error) {
    return rejectWithValue(error as SerializedError)
  }
}

export const validateUserRequest = async (): Promise<AuthLoginResponseModel> => {
  const user = await privateAxios.get<string, ApiUser>('/api/user')
  const data: AuthLoginResponseModel = {
    user: user,
    token: getLocalStorageItem('token') ?? ""
  }
  return data
}

export const logout = async () => {
  try {
    await privateAxios.post('/api/logout')
  } catch (error) {
    console.log(`Logout error: ${error}`)
  }
}

export const login = createAsyncThunk('auth/login', loginRequest)