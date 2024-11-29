'use client'

import React, { createContext, ReactNode, useContext, useState } from "react"
type Product = {
  id: number,
  title: string,
  price: number,
  mrp: number,
  description: string,
  image: string,
  isOpen: boolean
};

interface RoutesContextType {
  productFav?: Product[];
  setProductFav: React.Dispatch<React.SetStateAction<Product[]>>;
}
const RoutesContext = createContext<RoutesContextType | undefined>(undefined);

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [productFav, setProductFav] = useState<Product[]>([])
  const [addProduct, setAddProduct] = useState<Product[]>([])

  const data = {
    productFav,
    setProductFav,
    addProduct,
    setAddProduct
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










