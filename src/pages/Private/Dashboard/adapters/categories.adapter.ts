import { ApiCategory, Category } from "../models"

export const CategoryAdapter = (apiCategory: ApiCategory): Category => {
  return {
    id: apiCategory.id,
    icon: apiCategory.icon,
    name: apiCategory.name
  }
}