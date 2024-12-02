'use client'

import React, { createContext, ReactNode, useContext, useState } from "react"
export type Product = {
  id: number,
  title: string,
  price: number,
  mrp: number,
  description: string,
  image: string,
  isOpen?: boolean
};

interface RoutesContextType {
  productFav?: Product[];
  setProductFav: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct?: Product[];
  setAddProduct: React.Dispatch<React.SetStateAction<Product[]>>;
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}
const RoutesContext = createContext<RoutesContextType | undefined>(undefined);

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(1)
  const [productFav, setProductFav] = useState<Product[]>([])
  const [addProduct, setAddProduct] = useState<Product[]>([])

  const data = {
    productFav,
    setProductFav,
    addProduct,
    setAddProduct,
    count,
    setCount,
  }
  return (
    <RoutesContext.Provider value={data} >
      {children}
    </RoutesContext.Provider>
  )
}
export const useRoutesContext = () => {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutesContext must be used within a RoutesProvider");
  }
  return context;
};










