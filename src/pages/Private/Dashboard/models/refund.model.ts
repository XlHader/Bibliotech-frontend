import { ApiLoan } from "."

export interface ApiRefund {
  id: number
  loan: ApiLoan
  days_of_delay: number
  penalty: number
  refund_date: string
  created_at: string
}

export interface ApiResponseRefund {
  message: string
  data: ApiRefund
}