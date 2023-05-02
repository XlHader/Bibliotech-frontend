interface Props {
  clientName: string;
  bookName: string;
  date: string;
  delayDays: number;
  price: string;
}

export default function TableRefundBodyRow({ clientName, bookName, date, delayDays, price }: Props) {
  return (
    <tr className="bg-gray-100 border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {clientName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {bookName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {date}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {delayDays}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {price}
      </td>
    </tr>
  )
}