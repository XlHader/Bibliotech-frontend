import { Provider } from "react-redux"
import { ThemeProvider } from "@material-tailwind/react"
import { Suspense, lazy } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./components"
import store from "./redux/store"
import { PrivateRoutes, PublicRoutes } from "./models"
import { AuthGuard, PublicGuard } from "./guards"

const Login = lazy(() => import("./pages/Login/Login"))
const Dashboard = lazy(() => import("./pages/Private/Dashboard/Dashboard"))
const Books = lazy(() => import("./pages/Private/Dashboard/Books"))
const Refunds = lazy(() => import("./pages/Private/Dashboard/Refunds"))

export default function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.BOOKS} />} />
              <Route element={<PublicGuard />} >
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
              </Route>
              <Route element={<AuthGuard />} >
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} >
                  <Route path={PrivateRoutes.BOOKS} element={<Books />} />
                  <Route path={PrivateRoutes.REFUNDS} element={<Refunds />} />
                </Route>
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  )
}