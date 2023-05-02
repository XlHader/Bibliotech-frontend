import { useMemo } from "react"
import { useDashboard } from "../hooks"
import { TableRefundBodyRow } from "."
import { dateFormat, numberFormat } from "../../../../utilities"
import { PlusButton } from "../../../../components"

export default function TableRefunds() {
  const { refunds, clients, books, setRefundModal, refundModal } = useDashboard()

  const handleClickRefundModal = () => {
    setRefundModal(!refundModal)
  }

  const refundsWithClientAndBook = useMemo(() => {
    return refunds.map((refund) => {
      const client = clients.find((client) => client.id === refund.loan.client_id)
      const book = books.find((book) => book.id === refund.loan.book_id)
      return {
        ...refund,
        clientName: client?.full_name || 'No disponible',
        bookName: book?.title || 'No disponible',
      }
    })
  }, [refunds, clients, books])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Cliente
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Libro
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Fecha
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Días de retraso
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Precio
                  </th>
                </tr>
              </thead>
              <tbody>
                {refundsWithClientAndBook.map((refund) => (
                  <TableRefundBodyRow
                    key={refund.id}
                    clientName={refund.clientName}
                    bookName={refund.bookName}
                    date={dateFormat(refund.refund_date)}
                    delayDays={refund.days_of_delay}
                    price={numberFormat(refund.penalty)}
                  />
                ))}
              </tbody>
            </table>

            <div className="flex justify-end pt-4">
              <PlusButton onClickFunction={() => handleClickRefundModal()}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}