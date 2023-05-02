import { Typography } from '@material-tailwind/react'

interface Props {
  name: string
  onClick: () => void
  isActive: boolean
}

export default function NavItem({ name, onClick, isActive }: Props) {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className={`cursor-pointer ${isActive ? 'border-b-2 border-blue-500' : ''}`}
    >
      <button
        onClick={onClick}
        className="flex items-center"
      >
        {name}
      </button>
    </Typography>
  )
}