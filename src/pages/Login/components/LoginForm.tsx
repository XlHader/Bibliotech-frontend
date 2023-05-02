import { login } from "../../../services"
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthLoginRequestModel, PrivateRoutes } from "../../../models"
import {
  Card,
  Input,
  Button,
  Typography
} from "@material-tailwind/react"
import { ErrorText } from "../../../components"
import { useAppDispatch, useAuthSelector } from "../../../hooks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function LoginForm() {
  const { loading, error, user } = useAuthSelector()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<AuthLoginRequestModel>()

  const onSubmit: SubmitHandler<AuthLoginRequestModel> = async (data) => {
    await dispatch(login(data))
  }

  useEffect(() => {
    if (user?.id !== 0)
      navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
  }, [navigate, user])

  return (
    <Card color="transparent" shadow={false}>
      {loading && <p>Cargando...</p>}
      <Typography variant="h4" color="blue-gray">
        Inicio de sesión
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <Input type="email" placeholder="Correo electrónico" required {...register("email", { min: 1, maxLength: 255 })} />
            {
              error?.email
                ? error.email.map((error) => <ErrorText key={error} error={error} />)
                : null
            }
          </div>

          <div>
            <Input type="password" placeholder="Contraseña" required {...register("password", { min: 8, maxLength: 255 })} />
            {
              error?.password
                ? error.password.map((error) => <ErrorText key={error} error={error} />)
                : null
            }
          </div>
          {
            error?.login
              ? error.login.map((error) => <ErrorText key={error} error={error} />)
              : null
          }
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Iniciar sesión
        </Button>
      </form>
    </Card>
  )
}

