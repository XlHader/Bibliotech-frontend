import ReactModal from "react-modal";
import { RefundModal, TableRefunds } from "./components";
import { useDashboard } from "./hooks";
import { modalStyles } from "../style-components/modal.style";

export default function Refunds() {
  const { refundModal } = useDashboard()

  return (
    <>
      <TableRefunds />
      {
        refundModal && (
          <ReactModal isOpen={refundModal} style={modalStyles} ariaHideApp={false}>
            <RefundModal />
          </ReactModal>
        )
      }
    </>
  )
}

