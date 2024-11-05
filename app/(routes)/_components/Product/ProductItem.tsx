import { ProductType } from '@/constans'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProductModal from './ProductModal'

export interface ProductItemProps {
  product: ProductType
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title} </CardTitle>
        <CardDescription>{product.description} </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
        alt={product.title}
        src={product.image}
        width={500}
        height={500}
        className='w-full h-56 object-cover rounded-xl mb-4'
        />
        <div className="flex justify-between items-center">
          <span>${product.price}</span>
          <span className='line-through opacity-60'>${product.mrp} </span>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
    <ProductModal product={product} />
    <Button variant={'default'} className='rounded' >Add To Cart</Button>
      </CardFooter>
    </Card>

  )
}
