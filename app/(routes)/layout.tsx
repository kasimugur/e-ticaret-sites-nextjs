import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/Menu/Header'

interface RoutesLayoutProps{
  children:React.ReactNode
}
export default function RoutesLayout({children}:RoutesLayoutProps) {
  return (
    <>
    <Header />

    {children}

    <Footer />
    </>
  )
}
