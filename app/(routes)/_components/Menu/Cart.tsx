import React from 'react'
import {
  Sheet,
  SheetContent,
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
          
        </div>
      </SheetContent>
    </Sheet>
  )
}
