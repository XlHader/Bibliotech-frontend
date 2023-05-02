export interface ApiResponse<T> {
  message?: string,
  data?: T
}

export type ApiError = Record<string, string[]> 