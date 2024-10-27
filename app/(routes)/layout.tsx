import React from 'react'

interface RoutesLayoutProps{
  children:React.ReactNode
}
export default function RoutesLayout({children}:RoutesLayoutProps) {
  return (
    <>
    Header

    {children}

    Footer
    </>
  )
}
