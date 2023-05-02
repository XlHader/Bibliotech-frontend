import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios"
import { getLocalStorageItem } from "../utilities"
import { errorHandler } from "./handlers"
import { ApiError, ApiResponse } from "../models"

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const bearerToken = getLocalStorageItem('token')
  if (bearerToken)
    config.headers.Authorization = `Bearer ${bearerToken}`
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse<ApiResponse<unknown>> => {
  return response.data
}

const onResponseError = (error: AxiosError<ApiError>): Promise<ApiError | string> => {
  const status = error?.response?.status
  const errors = error?.response?.data?.errors

  if (errors)
    return Promise.reject(errors)

  if (status)
    return Promise.reject(errorHandler(status))

  return Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}