"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'



function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "No query provided";
  return (
    <>
    <input placeholder="Search..." />
    {query}
    </>
  )
}
export default function SearchPage() {
  
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}


