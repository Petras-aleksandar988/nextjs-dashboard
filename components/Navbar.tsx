import Image from "next/image"
import Link from "next/link"
import Logo from "../img/admin.png"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ThemeToggler } from "./ThemeToggler"
function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 flex p-2 justify-between text-white'>
        
   <Link href="/">
    <Image width={40} src={Logo}  alt="logo" />
    </Link>
    <div className="flex">
      <ThemeToggler/>
    <DropdownMenu>
  <DropdownMenuTrigger className="focus:outline-none"><Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-black" >A.D</AvatarFallback>
    </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        < Link href='/profile'>Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    < Link href='/auth'>Logout</Link>
    </DropdownMenuItem>
 
  </DropdownMenuContent>
</DropdownMenu>
    </div>
    </div>

  )
}

export default Navbar