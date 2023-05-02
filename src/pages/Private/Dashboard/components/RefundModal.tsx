import { Button, Card, CardBody, CardHeader, IconButton, Select, Typography, Option, typography } from "@material-tailwind/react";
import { useDashboard } from "../hooks";
import { useRef } from "react";
import { setRefundRequest } from "../services";

export default function RefundModal() {
  const { refundModal, setRefundModal, books, updateAll } = useDashboard()
  const loanRef = useRef<HTMLDivElement>(null)

  async function handleClickRefundModal() {
    setRefundModal(!refundModal)
  }

  async function handleClickRefundBook() {
    const id = Number(loanRef.current?.querySelector('button > span')?.getAttribute('value'))
    const refund = await setRefundRequest({ id })
    await updateAll()
    alert(refund)
  }

  const filteredBooks = books.filter(book => !book.is_avaible)

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="/img/refund.png"
          alt="ui/ux review check"
        />        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-2 right-2 rounded-full"
          onClick={handleClickRefundModal}
        >
          <span className="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </IconButton>
      </CardHeader>
      {
        filteredBooks.length !== 0
          ? (<CardBody>
            <Select label="Seleccione el libro" ref={loanRef}>
              {
                books.filter(book => !book.is_avaible)
                  .map((book) => (
                    <Option key={book.id}
                      value={String(book.loans.at(-1).id)}>
                      {book.title}
                    </Option>
                  ))
              }
            </Select>
            <Button size="lg" fullWidth={true} onClick={handleClickRefundBook} className="mt-6">
              Registrar devolución
            </Button>
          </CardBody>)
          : (
            <CardBody>
              <Typography color="red" className="text-center">No hay libros para devolver</Typography>
            </CardBody>
          )
      }
    </Card>
  )
}