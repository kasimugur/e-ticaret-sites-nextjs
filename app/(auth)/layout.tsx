import Image from 'next/image'
import React from 'react'
// import authImage from '@/public/login.jpg'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <div className="hidden h-screen md:block lg:w-2/5">
          <Image
            alt='logo'
            src={`/login.jpg`}
            width={1080}
            height={1920}
            className='w-full object-cover brightness-[.7] h-screen'
          />
        </div>
        {/* <div className='w-full md:w-3/5 md:mt-0 mt-16'> */}
        <div className='w-3/5'>
            {children}

            </div>
      </div>
    </>
  )
}


