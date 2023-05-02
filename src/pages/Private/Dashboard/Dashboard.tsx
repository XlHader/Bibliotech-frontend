import { Navbar } from "./components";
import { DashboardProvider } from "./context";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <main>
      <DashboardProvider>
        <Navbar />
        <Outlet />
      </DashboardProvider>
    </main>
  )
}