import { products } from '@/constans'
import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList() {
  return (
    <div className='container mx-auto px-5 py-9'>
      <h1 className='text-3xl mt-8 mb-8 text-center'>Product list</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
{products.map(product => (
  <ProductItem product={product}/>
))}
      </div>
    </div>
  )
}