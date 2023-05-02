import { ApiBook, Book } from "../models";

export const BookAdapter = (apiBook: ApiBook): Book => {
  return {
    id: apiBook.id,
    title: apiBook.title,
    author: apiBook.author,
    isbnCode: apiBook.isbn_code,
    numberPages: apiBook.number_pages,
    isAvaible: apiBook.is_avaible,
    categoryId: apiBook.category_id,
    loans: apiBook.loans
  }
}