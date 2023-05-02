import ReactModal from "react-modal"
import { useDashboard } from "./hooks"
import { CategoriesBreadcrum } from "./components"
import { BookCard } from "./components"
import { BookModal } from "./components"
import { modalStyles } from "../style-components/modal.style"

export default function Books() {
  const { filteredBooks, bookModal } = useDashboard()

  return (
    <>
      <CategoriesBreadcrum />
      <div className="container mt-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.map(book => {
            return (
              <BookCard
                key={book.id}
                book={book}
              />
            )
          })}
        </div>
      </div>

      {
        bookModal && (
          <ReactModal isOpen={bookModal} style={modalStyles} ariaHideApp={false}>
            <BookModal />
          </ReactModal>
        )
      }
    </>
  )
}