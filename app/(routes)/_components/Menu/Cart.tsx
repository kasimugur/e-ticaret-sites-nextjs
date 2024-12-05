"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from 'lucide-react'
import ProductAddCart from '../Product/ProductAddCart'
import { useRoutesContext } from '@/app/context/RoutesContext'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function CartMenu() {
const {addProduct} = useRoutesContext()
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon />
      </SheetTrigger>
      <SheetContent className=''>
          <ScrollArea className='flex flex-col mt-6 gap-1  h-full rounded-md  '>

        {
          addProduct?.map(product => <ProductAddCart key={product.id} product={product} />)
        }
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
