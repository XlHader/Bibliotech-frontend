import { privateAxios } from "../../../../api"
import { ApiBook } from "../models"

interface Books {
  data: ApiBook[]
}

export const getBooksRequest = async (): Promise<Books> =>
  await privateAxios.get("/api/books")

export const updateBookStateRequest = async ({ id, state }: { id: string, state: string }) =>
  await privateAxios.put(`/api/books/${id}`, { state })