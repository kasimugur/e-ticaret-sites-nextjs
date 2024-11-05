import React from 'react'
import { DataTable } from '../_components/Datatable/data-table'
import { columns, Payment } from '../_components/Datatable/columns'
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 150,
      product:"item  var",
      status: "pending",
      email: "msd@example.com",
      code:""
    },
    {
      id: "728ed52f",
      amount: 200,
      product:"item  yok",
      status: "pending",
      email: "mfa@example.com",
    },
    // ...
  ] 
}
export default async function AboutPage() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10 border mt-4 dark:border-slate-600">
    <DataTable columns={columns} data={data} />
  </div>
  )
}
