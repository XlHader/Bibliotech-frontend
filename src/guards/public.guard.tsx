import { Navigate, Outlet } from "react-router-dom"
import { useAuthSelector } from "../hooks"

const PublicValidationFragment = <Outlet />
const PrivateValidationFragment = <Navigate replace to="/dashboard/books" />

export const PublicGuard = () => {
  const { user } = useAuthSelector()


  return user?.id === 0
    ? PublicValidationFragment
    : PrivateValidationFragment
}