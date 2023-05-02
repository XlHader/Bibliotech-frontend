import { privateAxios } from "../../../../api";
import { ApiResponse } from "../../../../models";
import { LoanError, LoanResponse } from "../models/loan.model";

export const createLoanRequest = async ({ book_id, client_id }: { book_id: number, client_id: number }) => {
  try {
    const books_ids = [book_id];
    const { message } = await privateAxios.post<string, ApiResponse<LoanResponse>>('/api/loans', { books_ids, client_id })
    return message;
  } catch (error) {
    const err = error as LoanError
    
    if (err.client_id)
      return err.client_id[0]

    if (err.books_ids)
      return err.books_ids[0]

    if (err.loan)
      return err.loan[0]

    return 'Error al crear el prestamo'
  }
}