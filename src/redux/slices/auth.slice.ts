import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {
  ApiError,
  AuthLoginResponseModel,
  AuthState,
  UserEmptyState
} from "../../models"
import {
  removeLocalStorageItem,
  setLocalStorageItem
} from "../../utilities"
import { login } from "../../services"
import { UserAdapter } from "../../adapters"

const initialState: AuthState = {
  loading: false,
  user: UserEmptyState,
  token: "",
  error: {},
  success: false
}

const setUserData = (state: AuthState, payload: AuthLoginResponseModel) => {
  const adaptUser = UserAdapter(payload.user)
  const token = payload.token

  setLocalStorageItem("user", adaptUser)
  setLocalStorageItem("token", token)

  return { ...state, user: adaptUser, token: token }
}

const removeUserData = (state: AuthState) => {
  removeLocalStorageItem("token")
  removeLocalStorageItem("user")

  return { ...state, user: UserEmptyState, token: "" }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: AuthState, { payload }: PayloadAction<AuthLoginResponseModel>) => {
      return setUserData({ ...state, success: true }, payload)
    },
    resetCredentials: (state: AuthState) => {
      return removeUserData({ ...state, success: false })
    }
  },
  extraReducers: {
    // Login
    [login.pending.toString()]: (state: AuthState) => {
      return { ...state, loading: true }
    },
    [login.fulfilled.toString()]: (state: AuthState, { payload }: PayloadAction<AuthLoginResponseModel>) => {
      return setUserData({ ...state, loading: false, success: true }, payload)
    },
    [login.rejected.toString()]: (state: AuthState, { payload }: PayloadAction<ApiError>) => {
      return { ...state, loading: false, error: payload, success: false }
    }
  }
})

export const { setCredentials, resetCredentials } = authSlice.actions

export default authSlice.reducer