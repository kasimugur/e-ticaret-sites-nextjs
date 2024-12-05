'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductType } from '@/constans';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRoutesContext } from '@/app/context/RoutesContext';
import { SquareXIcon } from 'lucide-react';
import { number } from 'zod';
interface ProductAddType {
  product: ProductType
}
export default function ProductAddCart({ product }: ProductAddType) {
  const { count, setCount, setAddProduct, addProduct } = useRoutesContext()
  const [addCount, setAddCount] = useState<number[]>([])
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({})


  const getProductsFromLocalStorage = (): ProductType[] => {
    const existingAdd = localStorage.getItem("AddProducts");
    return existingAdd ? JSON.parse(existingAdd) : [];
  };
  
  const saveProductsToLocalStorage = (product: ProductType[]) => {
    localStorage.setItem("AddProducts", JSON.stringify(product));
  };

  const deleteProudctCart = (id: number) => {
    const deltedProduct = addProduct?.filter(prd => prd.id !== id)
    saveProductsToLocalStorage(deltedProduct as ProductType[])
    setAddProduct(deltedProduct as ProductType[])
  }


  const loadProductsFromLocalStorage = () => {
    const storedProducts = getProductsFromLocalStorage(); // Local storage'dan ürünleri al

    const counts: { [key: number]: number } = {};

    storedProducts.forEach((product) => {
      counts[product.id] = product.add_Product; // Her ürünün ID'sine göre adetini al
    });
    setProductCounts(counts); // State'i güncelle
  };


  const handleIncrement = (id: number) => {
    if (product.id === id) {
      const addProducts = getProductsFromLocalStorage();
      const existingProductIndex = addProducts.findIndex((item: ProductType) => item.id === id);

      if (existingProductIndex > -1) {
        addProducts[existingProductIndex].add_Product += 1;
        setProductCounts(prevCounts => ({
          ...prevCounts,
          [id]: prevCounts[id] + 1
        }));
        saveProductsToLocalStorage(addProducts);
        // setAddProduct(addProducts);
      }

    }
  }
  const handleDecrement = (id: number) => {
    if (product.id === id) {
      const addProducts = getProductsFromLocalStorage();

      const existingProductIndex = addProducts.findIndex((item: ProductType) => item.id === id);

      if (existingProductIndex > -1) {
        if (addProducts[existingProductIndex].add_Product  > 0) {
          addProducts[existingProductIndex].add_Product -= 1;

          setProductCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 1) - 1
          }));

          saveProductsToLocalStorage(addProducts)
        }

        if(addProducts[existingProductIndex].add_Product < 1) {
          deleteProudctCart(id); // Sepetten silme işlemi
          console.log("-----------------",id)
        }
        console.log(addProducts);
        
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
