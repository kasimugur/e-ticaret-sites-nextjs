'use client'

import { ProductType } from "@/constans";
import React, { createContext, ReactNode, useContext, useState } from "react"
export type Product = {
  id: number,
  title: string,
  price: number,
  mrp: number,
  description: string,
  image: string,
  isOpen?: boolean,
  add_Product?:number
};

interface RoutesContextType {
  productFav?: Product[];
  setProductFav: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct?: Product[];
  setAddProduct: React.Dispatch<React.SetStateAction<Product[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  saveProductsToLocalStorage:(product: ProductType[]) => void;
  getProductsFromLocalStorage: () => ProductType[];
  deleteProudctCart:(id:number) => void
}
const RoutesContext = createContext<RoutesContextType | undefined>(undefined);

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(1)
  const [productFav, setProductFav] = useState<Product[]>([])
  const [addProduct, setAddProduct] = useState<Product[]>([])
// local Add product 
  const saveProductsToLocalStorage = (product: ProductType[]) => {
    localStorage.setItem("AddProducts", JSON.stringify(product));
  };

  const getProductsFromLocalStorage = (): ProductType[] => {
    const existingAdd = localStorage.getItem("AddProducts");
    if (existingAdd) {
      try {
          return JSON.parse(existingAdd) as ProductType[];
      } catch (error) {
          console.error("Veri ayrıştırma hatası:", error);
          return [];
      }
  }
  return [];
  };
  
  
  const deleteProudctCart = (id: number) => {
    const deltedProduct = addProduct?.filter(prd => prd.id !== id)
    saveProductsToLocalStorage(deltedProduct as ProductType[])
    setAddProduct(deltedProduct as ProductType[])
  }

  const data = {
    productFav,
    setProductFav,
    addProduct,
    setAddProduct,
    count,
    setCount,
    saveProductsToLocalStorage,
    getProductsFromLocalStorage,
    deleteProudctCart
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










