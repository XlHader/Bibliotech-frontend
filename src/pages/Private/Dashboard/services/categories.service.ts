import { privateAxios } from "../../../../api"
import { ApiCategory } from "../models"

interface Categories {
  data: ApiCategory[]
}

export const getCategoriesRequest = async (): Promise<Categories> =>
  await privateAxios.get('/api/categories')
