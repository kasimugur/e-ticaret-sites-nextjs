import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { sssList } from '@/constans'

export default function AccordionExample() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {sssList.map((s, index) => (
          <AccordionItem key={index} value={s.id}>
            <AccordionTrigger>{s.title}</AccordionTrigger>
            <AccordionContent>
              {s.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
