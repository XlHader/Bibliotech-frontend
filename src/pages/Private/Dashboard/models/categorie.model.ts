export interface ApiCategory {
  id: number
  icon: string
  name: string
}

export interface Category {
  id: number
  icon: string
  name: string
}

export const ApiEmptyCategory: ApiCategory = {
  id: 0,
  icon: '',
  name: ''
}

export const CategoryEmptyState: Category = {
  id: 0,
  icon: '',
  name: ''
}