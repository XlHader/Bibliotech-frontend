import axios from "axios"
import { setupInterceptorsTo } from "./interceptors"

const BASE_URL = import.meta.env.VITE_BASE_URL as string

export const publicAxios = axios.create()

export const privateAxios = setupInterceptorsTo(axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
}))