import { LoginForm } from "./components"

export default function Login() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-10 flex flex-col md:flex-row items-center">
      <img
        src="../img/logo.svg"
        alt="Logo"
        className="max-w-xs"
      />

      <div className="p-10 w-full">
        <LoginForm />
      </div>
    </main>
  )
}