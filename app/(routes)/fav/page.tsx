"use client"

import * as React from "react"
import { useRoutesContext } from "@/app/context/RoutesContext"
import ProductItem from "../_components/Product/ProductItem"

export default function favPage() {
  const { productFav } = useRoutesContext();
  const isOpenFav = productFav ? productFav?.filter(e => e.isOpen === true) : []
  

  return (
    <div className='container mx-auto px-5 py-9'>
      <h1 className='text-3xl mt-8 mb-8 text-center'>Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isOpenFav.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  )
}
