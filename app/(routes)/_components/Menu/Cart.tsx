import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from 'lucide-react'

export default function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col mt-8 space-y-6 '>
          Empty Cart
        </div>
      </SheetContent>
    </Sheet>
  )
}
