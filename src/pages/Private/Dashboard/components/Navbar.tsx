import {
  Navbar as NavBar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react"
import {
  PowerIcon,
} from "@heroicons/react/24/outline"

import NavProfileMenuItem from "./NavProfileMenuItem"
import NavItem from "./NavItem"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../../../models"
import { logout } from "../../../../services"
import { useDispatch } from "react-redux"
import { resetCredentials } from "../../../../redux/slices/auth.slice"

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const profileMenuItems = [
    {
      label: "Cerrar sesión",
      icon: PowerIcon,
      onClick: async function handleLogout() {
        await logout()
        dispatch(resetCredentials())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
      }
    }
  ]

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [])

  const navItems = [
    { name: "Libros", onClick: () => navigate(PrivateRoutes.BOOKS) },
    { name: "Devoluciones", onClick: () => navigate(PrivateRoutes.REFUNDS) },
  ]

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item, i) => (
        <NavItem
          key={i}
          name={item.name}
          onClick={() => {
            item.onClick();
            setActiveIndex(i);
          }}
          isActive={i === activeIndex}
        />
      ))}
      <NavProfileMenuItem profileMenuItems={profileMenuItems} />
    </ul>
  )

  return (
    <NavBar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="p"
          variant="small"
          className="mr-4 py-1.5 font-normal"
        >
          <span>Bibliotech</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </NavBar>
  )
}