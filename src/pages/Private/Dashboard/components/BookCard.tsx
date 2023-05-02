import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react"
import { useDashboard } from "../hooks";
import { ApiBook } from "../models";

interface Props {
  book: ApiBook
}

export default function BookCard({ book }: Props) {
  const { title, author, number_pages, icon, is_avaible } = book;
  const { bookModal, setBookModal, setSelectedBook } = useDashboard()

  const handleClickModal = () => {
    setBookModal(!bookModal)
    setSelectedBook(book)
  }

  return (
    <div className="card m-2 cursor-pointer rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
      <Card className="m-3" onClick={handleClickModal}>
        <CardHeader color="blue" className="relative h-56">
          <img
            src={icon}
            alt={`${title} - ${author}`}
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography>
            <span className="text-gray-500">Autor:</span> {author}
          </Typography>
          <Typography>
            <span className="text-gray-500">Disponible:</span> {is_avaible ? 'Si' : 'No'}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{`${number_pages} Páginas`}</Typography>
        </CardFooter>
      </Card>
    </div>
  )
}