import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"

  import Link from "next/link"
  import { LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User
   } from "lucide-react"



function Sidebar() {
  return (
    <Command className="bg-secondary rounded-none">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
    <Link href='/'>
      <CommandItem>
        <LayoutDashboard  className="mr-2 h-4 w-4" />
        <div>Dashboard</div>
      </CommandItem>
      </Link>
        <Link href='/posts'>
      <CommandItem>
        <Newspaper className="mr-2 h-4 w-4" />
        <div>Posts</div>
      </CommandItem>
      </Link>
        <Link href='/categories'>
      <CommandItem>
        <Folders className="mr-2 h-4 w-4" />
        <div>Categories</div>
      </CommandItem>
      </Link>
   
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <CommandShortcut>AltP</CommandShortcut>
      </CommandItem>
      <CommandItem>
      <CreditCard className="mr-2 h-4 w-4" />
      <span>Billing</span>
      <CommandShortcut>AltB</CommandShortcut>
      </CommandItem>
      <CommandItem>
      < Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <CommandShortcut>AltS</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

  )
}

export default Sidebar