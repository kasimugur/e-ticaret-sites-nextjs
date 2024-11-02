import React from 'react'
import { Pacifico } from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Heart, Search,  UserIcon } from 'lucide-react'
import { ModeToggle } from '@/components/modeToggle'
import NavMenu from './NavMenu'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import CartMenu from './Cart'

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" })

export default function Header() {
  return (
    <div className='mx-auto bgone shadow-md'>
      <div className="container flex flex-row items-center justify-between p-5">
        <div>
          <h2 className={`${pacifiko.className} text-xl`}>
            ECommerce</h2>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input className='border-2 w-full' />
          <Button variant="link" className='absolute right-1'>
            <Search />
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <ModeToggle />
          <Heart />
          <CartMenu />
          <UserIcon />
          <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  )
}
