export interface LoanRequest {
  book_id: string
  client_id: string
}

export interface LoanResponse {
  message: string
}

export interface LoanError {
  client_id?: string[]
  books_ids?: string[]
  loan?: string[]
}

export interface ApiLoan {
  id: number
  client_id: number
  book_id: number
}