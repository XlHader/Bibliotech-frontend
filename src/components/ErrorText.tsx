import {
  Typography
} from "@material-tailwind/react"

interface props {
  error: string
}

export default function ErrorText({ error }: props) {
  return (
    <Typography color="red" className="font-normal text-xs/[5px] mt-1 leading-5">
      {error}
    </Typography>
  )
}