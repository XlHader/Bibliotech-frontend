import { ApiBook, ApiCategory, ApiRefund } from "."
import { ApiClient } from "./client.model"

export interface DashboardContextProps {
  categories: ApiCategory[]
  setCategories: (categories: ApiCategory[]) => void
  selectedCategory: ApiCategory
  setSelectedCategory: (category: ApiCategory) => void
  books: ApiBook[]
  setBooks: (books: ApiBook[]) => void
  clients: ApiClient[],
  setClients: (clients: ApiClient[]) => void
  selectedBook: ApiBook
  setSelectedBook: (book: ApiBook) => void
  filteredBooks: ApiBook[]
  bookModal: boolean
  setBookModal: (modal: boolean) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  refundModal: boolean
  setRefundModal: (modal: boolean) => void
  refunds: ApiRefund[]
  setRefunds: (refunds: ApiRefund[]) => void
  updateAll: () => Promise<void>;
}