"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ProductType } from '@/constans'
import { useRoutesContext } from '@/app/context/RoutesContext'
interface ProductModalprops {
  product: ProductType
}

export default function ProductModal({ product }: ProductModalprops) {
  const { getProductsFromLocalStorage, saveProductsToLocalStorage, setAddProduct } = useRoutesContext()
  const [quantity, setQuantity] = useState(1);

  const handleInc = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handleDec = () => {
    setQuantity(quantity + 1)

  }
  const handleAddProducts = (id: number) => {
    if (product.id === id) {
      const addProductsLocal: ProductType[] = getProductsFromLocalStorage()
      const addProductControl = addProductsLocal.findIndex(item => item.id === id)
      if (addProductControl <= -1) {
        addProductsLocal.push({...product, isOpen:false, add_Product: quantity})
      }
      else {
        if(addProductsLocal[addProductControl].add_Product === undefined) {
        console.log("addProduct undifiend")  
        } else {
          addProductsLocal[addProductControl].add_Product += quantity
        }
      }
      setQuantity(1)
      saveProductsToLocalStorage(addProductsLocal)
      setAddProduct(addProductsLocal)
    }
  }
  return (
    <Dialog>
      <DialogTrigger >
        <Button variant={'destructive'} className='rounded' >Detail</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[900px]'>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <Image
                alt={product.title}
                src={product.image}
                width={500}
                height={500}
                className='w-full h-96 object-cover rounded-xl mb-4'
              />
            </div>
            <div className='p-4'>

              <h2 className='text-4xl font-semibold'>{product.title} </h2>
              <p className='mt-5 font-light'>{product.description}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis unde culpa fuga dicta, numquam repudiandae, veniam amet corrupti voluptas adipisci, laborum sapiente.
              </p>

              <div className="flex mt-8 justify-between  items-center">
                <span>${product.price}</span>
                <span className='line-through opacity-60'>${product.mrp} </span>
              </div>
              <div className='mt-8'>
                <div className="flex flex-row items-center gap-4">
                  <Button onClick={handleInc} variant={"destructive"} size={"icon"}>-</Button>
                  {quantity}
                  <Button onClick={handleDec} variant={"destructive"} size={"icon"}>+</Button>
                </div>
              </div>
            </div>


          </div>

        </div>
        <DialogFooter className='flex '>
          <Button onClick={() => handleAddProducts(product.id)} type="submit">Add To Card</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}
