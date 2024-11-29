'use client'

import { ProductType } from '@/constans'
import React, { useEffect, useState } from 'react'
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
import { useToast } from '@/hooks/use-toast'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useRoutesContext } from '@/app/context/RoutesContext'

export interface ProductItemProps {
  product: ProductType

}

export default function ProductItem({ product }: ProductItemProps) {
  const { setProductFav } = useRoutesContext()
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const handleClick = (id: number) => {
    toast({
      title: `${product.title} added`,
      description: `${product.description}`,
      variant: "success"
    })
    console.log(id)

  }

  const handleClickFav = (id: number) => {

    // ürün control et 
    if (product.id === id) {

      const existingFavs = localStorage.getItem("favProducts");
      const favProducts = existingFavs ? JSON.parse(existingFavs) : [];
      // Ürünü favori ürünler listesine ekle
      const productWithOpenState = {
        ...product,
        isOpen: !isOpen // isOpen durumunu tersine çevir
      };

      // Ürünü dizide güncelle veya ekle
      const updatedFavProducts = favProducts.filter((fav: ProductType) => fav.id !== id);
      updatedFavProducts.push(productWithOpenState);

      localStorage.setItem("favProducts", JSON.stringify(updatedFavProducts));
      setProductFav(updatedFavProducts)
    }
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const existingFavs = localStorage.getItem("favProducts");
    const favProducts = existingFavs ? JSON.parse(existingFavs) : [];

    setProductFav(favProducts)
  }, [])


  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{product.title} </CardTitle>
            <CardDescription>{product.description} </CardDescription>
          </div>
          <Link onClick={() => handleClickFav(product.id)} href="/fav">
          <Heart color={isOpen ? 'red' : 'white'} />
          </Link>
        </div>
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
        <Button onClick={() => handleClick(product.id)} variant={'default'} className='rounded' >Add To Cart</Button>
      </CardFooter>
    </Card>
  )
}
