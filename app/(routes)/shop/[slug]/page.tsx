import React from 'react'

interface ShopDetailPageProps{
  params: {
    slug:string;
  }
}

export default function ShopDetailPage({params}:ShopDetailPageProps) {
  return (
    <div>
      {params.slug}
    </div>
  )
}
