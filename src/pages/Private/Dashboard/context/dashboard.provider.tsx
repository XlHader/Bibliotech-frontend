import { ApiBook, ApiCategory, ApiRefund } from '../models';
import { ApiClient } from '../models';
import { DashboardContextProps } from '../models';
import { getBooksRequest, getCategoriesRequest } from '../services'
import { createContext, useState, useMemo, useEffect } from 'react';
import { getClientsRequest } from '../services/clients.service';
import { getRefundsRequest } from '../services/refunds.service';

export const DashboardContext = createContext<DashboardContextProps>({} as DashboardContextProps)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function DashboardProvider({ children }: Props) {
  const [categories, setCategories] = useState<ApiCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<ApiCategory>({} as ApiCategory)
  const [books, setBooks] = useState<ApiBook[]>([])
  const [selectedBook, setSelectedBook] = useState<ApiBook>({} as ApiBook)
  const [clients, setClients] = useState<ApiClient[]>([])
  const [refunds, setRefunds] = useState<ApiRefund[]>([])
  const [bookModal, setBookModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [refundModal, setRefundModal] = useState<boolean>(false)

  async function getCategories() {
    const { data } = await getCategoriesRequest()
    setCategories(data)
  }

  async function getAllBooks() {
    const { data } = await getBooksRequest()
    setBooks(data)
  }

  async function getAllClients() {
    const { data } = await getClientsRequest()
    setClients(data)
  }

  async function getAllRefunds() {
    const { data } = await getRefundsRequest()
    setRefunds(data)
  }

  async function updateRefunds() {
    const { data } = await getRefundsRequest()
    setRefunds(data)
  }

  async function updateBooks() {
    const { data } = await getBooksRequest()
    setBooks(data)
  }

  async function updateAll() {
    await updateBooks()
    await updateRefunds()
  }

  useEffect(() => {
    setLoading(true)
    getCategories()
      .then(() => getAllBooks())
      .then(() => getAllClients())
      .then(() => getAllRefunds())
      .finally(() => setLoading(false))
  }, [])

  const filteredBooks = useMemo(() => {
    if (!selectedCategory.id) return books
    return books.filter((book) => book.category_id === selectedCategory.id)
  }, [books, selectedCategory])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <DashboardContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        books,
        setBooks,
        filteredBooks,
        loading,
        setLoading,
        bookModal,
        setBookModal,
        selectedBook,
        setSelectedBook,
        refundModal,
        setRefundModal,
        clients,
        setClients,
        refunds,
        setRefunds,
        updateAll
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}