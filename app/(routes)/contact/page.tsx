import React from 'react'
import AccordionExample from '../_components/AccordionExample'

export default function ContactPage() {
  return (
    <div className='container mx-auto mt-4'>
      <div className="flex flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          part1
        </div>
        <div className="w-full md:w-1/2">
        <AccordionExample />
        </div>
      </div>
      
    </div>
  )
}
