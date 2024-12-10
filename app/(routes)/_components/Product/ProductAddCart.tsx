'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductType } from '@/constans';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRoutesContext } from '@/app/context/RoutesContext';
import { SquareXIcon } from 'lucide-react';
interface ProductAddType {
  product: ProductType
}
export default function ProductAddCart({ product }: ProductAddType) {
  const { saveProductsToLocalStorage, getProductsFromLocalStorage, deleteProudctCart } = useRoutesContext()
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({})



  const loadProductsFromLocalStorage = () => {
    const storedProducts: ProductType[] = getProductsFromLocalStorage()
    const counts: { [key: number]: number } = {}

    storedProducts.forEach((product: ProductType) => {
      if (product.add_Product !== undefined) counts[product.id] = product.add_Product
    })
    
    setProductCounts(counts)
    return storedProducts;
  };


  const handleIncrement = (id: number) => {
    if (product.id === id) {
      const addProducts: ProductType[] = getProductsFromLocalStorage();
      const existingProductIndex = addProducts.findIndex((item: ProductType) => item.id === id);

      if (existingProductIndex > -1 &&  addProducts[existingProductIndex].add_Product !== undefined) {
        addProducts[existingProductIndex].add_Product += 1;
        setProductCounts(prevCounts => ({
          ...prevCounts,
          [id]: prevCounts[id] + 1
        }));
        saveProductsToLocalStorage(addProducts);
      }

    }
  }
  const handleDecrement = (id: number) => {
    if (product.id === id) {
      const addProducts: ProductType[] = getProductsFromLocalStorage();

      const existingProductIndex = addProducts.findIndex((item: ProductType) => item.id === id);

      if (existingProductIndex > -1 &&  addProducts[existingProductIndex].add_Product !== undefined) {
        if (addProducts[existingProductIndex].add_Product > 0) {
          addProducts[existingProductIndex].add_Product -= 1;

          setProductCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 1) - 1
          }));

          saveProductsToLocalStorage(addProducts)
        }

        if (addProducts[existingProductIndex].add_Product < 1) {
          deleteProudctCart(id);
        }
      }
    }
  }
  useEffect(() => {
    loadProductsFromLocalStorage()

  }, [])
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
            <Button onClick={() => handleDecrement(product.id)} variant={"default"} size={"icon"}>-</Button>
            {productCounts[product.id]}
            <Button onClick={() => handleIncrement(product.id)} variant={"destructive"} size={"icon"}>+</Button>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
