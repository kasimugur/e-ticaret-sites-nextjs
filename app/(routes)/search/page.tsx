"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchPage() {

  const  searchParams = useSearchParams();

  return (
    <div>
      {searchParams.get("query")}
    </div>
  )
}
