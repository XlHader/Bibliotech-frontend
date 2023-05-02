export interface ApiBook {
  id: number
  title: string
  author: string
  isbn_code: string
  number_pages: number
  is_avaible: boolean
  category_id: number
  loans: any[]
  icon?: string
}

export interface Book {
  id: number
  title: string
  author: string
  isbnCode: string
  numberPages: number
  isAvaible: boolean
  categoryId: number
  loans: any[]
  icon?: string
}

export const ApiEmptyBook: ApiBook = {
  id: 0,
  title: '',
  author: '',
  isbn_code: '',
  number_pages: 0,
  is_avaible: false,
  category_id: 0,
  loans: [],
  icon: ''
}

export const BookEmptyState: Book = {
  id: 0,
  title: '',
  author: '',
  isbnCode: '',
  numberPages: 0,
  isAvaible: false,
  categoryId: 0,
  loans: [],
  icon: ''
}