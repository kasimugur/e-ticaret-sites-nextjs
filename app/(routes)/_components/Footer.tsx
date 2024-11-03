"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Footer() {

  const router  = useRouter();
  return (
    <div className='text-sm text-center  mb-2'>
      <div className="">
        <Button variant="link" onClick={() => router.push("/")} >All right Reserverd Ecommerce Website</Button>
      </div>

      <div className="">
        <Link href={`https://github.com/kasimugur/`} target='_blank'> Copyright @kasimugur takipte kal</Link>
      </div>
    </div>
  )
}
