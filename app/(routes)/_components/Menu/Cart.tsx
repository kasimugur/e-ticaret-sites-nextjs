import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from 'lucide-react'
import { products } from '@/constans'
import ProductAddCart from '../Product/ProductAddCart'

export default function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col mt-8 space-y-6 '>
        {
        products.filter(e => e.id === 3).map(product => <ProductAddCart product={product} />)
      }
        </div>
      </SheetContent>
    </Sheet>
  )
}
