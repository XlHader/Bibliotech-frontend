import { Navigate, Outlet } from "react-router-dom"
import { useAuthSelector } from "../hooks"

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to="/login" />

export const AuthGuard = () => {
  const { user } = useAuthSelector()

  return user?.id !== 0 
    ? PrivateValidationFragment 
    : PublicValidationFragment
}
