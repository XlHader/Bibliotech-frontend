import { privateAxios } from "../../../../api"
import { ApiResponse } from "../../../../models"
import { ApiResponseRefund } from "../models"

export const getRefundsRequest = async () =>
  await privateAxios.get('/api/refunds')

export const setRefundRequest = async ({ id }: { id: number }) => {
  const { message } = await privateAxios.post<string, ApiResponse<ApiResponseRefund>>(`/api/loans/${id}/refunds`)
  return message
}