import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Select,
  Option
} from "@material-tailwind/react";
import { useDashboard } from "../hooks";
import { useRef } from "react";
import { createLoanRequest } from "../services";

export default function BookModal() {
  const {
    selectedBook,
    setBookModal,
    bookModal,
    categories,
    clients,
    updateAll
  } = useDashboard()
  const clientRef = useRef<HTMLDivElement>(null)
  const { id, title, author, number_pages, icon, isbn_code, category_id, is_avaible } = selectedBook

  const handleClickBookModal = () => {
    setBookModal(!bookModal)
  }

  const handleLoanBook = async () => {
    const clientId = Number(clientRef.current?.querySelector('button > span')?.getAttribute('value'))
    const response = await createLoanRequest({ book_id: id, client_id: clientId })
    await updateAll()
    alert(response)
    setBookModal(false)
  }

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={icon}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-2 right-2 rounded-full"
          onClick={handleClickBookModal}
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
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography color="gray">
          Autor: <span className="font-medium">{author}</span> <br />
          ISBN: <span className="font-medium">{isbn_code}</span> <br />
          Categoría: <span className="font-medium">{categories[category_id - 1]?.name}</span> <br />
          Número de páginas: <span className="font-medium">{number_pages}</span> <br />
          Disponible: <span className="font-medium">{is_avaible ? 'Sí' : 'No'}</span>
        </Typography>
      </CardBody>
      {is_avaible && (<CardFooter className="pt-3">
        <div className="mb-4">
          <Select label="Seleccione el cliente" ref={clientRef}>
            {clients.map((client) => (
              <Option key={client.id} value={String(client.id)}>
                {client.full_name}
              </Option>
            ))}
          </Select>
        </div>
        <Button size="lg" fullWidth={true} onClick={handleLoanBook}>
          Prestar libro
        </Button>
      </CardFooter>)}
    </Card>
  )
}