import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { validateUserRequest } from "../services"
import { setCredentials } from "../redux/slices/auth.slice"
import { useAppDispatch } from "../hooks"
import { getLocalStorageItem } from "../utilities"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function RoutesWithNotFound({ children }: Props) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {

    const checkUserCredentials = async () => {
      try {
        const data = await validateUserRequest()
        dispatch(setCredentials(data))
        setIsChecking(false)
      } catch (error) {
        setIsChecking(false)
        navigate('/login')
      }
    }

    const token = getLocalStorageItem("token")

    if (token) checkUserCredentials()
    else setIsChecking(false)

  }, [dispatch, navigate])
  
  if (isChecking) return <h1>Loading...</h1>

  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}