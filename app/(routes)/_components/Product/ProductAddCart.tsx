'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductType } from '@/constans';
import Image from 'next/image';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useRoutesContext } from '@/app/context/RoutesContext';
import { SquareXIcon } from 'lucide-react';
interface ProductAddType {
  product: ProductType
}
export default function ProductAddCart({ product }: ProductAddType) {
  const { count,setCount, setAddProduct, addProduct } = useRoutesContext()

  const deleteProudctCart = (id: number) => {
    const deltedProduct = addProduct?.filter(prd => prd.id !== id)
    localStorage.setItem("AddProducts", JSON.stringify(deltedProduct));
    setAddProduct(deltedProduct as ProductType[])
  }


  return (
    <Card className='bg-slate-400 h-52 flex flex-col'>
      <CardHeader>
        <div className="flex text-center justify-between">
          <div>
            <CardTitle>{product.title} </CardTitle>
            <CardDescription>{product.description} </CardDescription>
          </div>
          <div>
            <SquareXIcon onClick={() => deleteProudctCart(product.id)} />
          </div>
        </div>
      </CardHeader>
      <CardContent className='flex'>

        <CardContent className='flex'>
          <Image
            alt={product.title}
            src={product.image}
            width={400}
            height={500}
            className=' w-24 object-contain rounded-xl mb-4'
          />

        </CardContent>
        <CardFooter className='flex flex-col gap-3'>
          <div className="flex gap-3 items-start justify-between w-full">
            <span>${product.price}</span>
            <span className='line-through opacity-60'>${product.mrp} </span>
          </div>
          <div className='gap-2 flex items-center'>
            <Button variant={"default"} size={"icon"}>-</Button>
            {count}
            <Button variant={"destructive"} size={"icon"}>+</Button>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
