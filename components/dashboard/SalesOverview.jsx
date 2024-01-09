import React from 'react'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'

export default function SalesOverview() {
    const salesActivity = [
        {
            title:"To be Packed",
            number: 10,
            unit: "Qty",
            href: "#",
            color: "text-blue-600"
        },
        {
            title:"To be Shipped",
            number: 12,
            unit: "Pkgs",
            href: "#",
            color: "text-red-600"
        },
        {
            title:"To be Delivered",
            number: 25,
            unit: "Pkgs",
            href: "#",
            color: "text-green-600"
        },
        {
            title:"To be Invoiced",
            number: 4,
            unit: "Qty",
            href: "#",
            color: "text-yellow-600"
        },
    ]
    const inventorySummary = [
        {
            title: "Quantity in hand",
            number: 34,
        },
        {
            title: "Quantity to be recived",
            number: 12,
        },
    ]
  return (
    <div className='grid grid-cols-12 bg-blue-50 border-b border-slate-300 gap-4'>
        {/* SALES ACTIVITY */}
        <div className='col-span-8 border-r border-slate-300 p-8'>
            <h2 className='mb-6 text-xl'>Sales Activity</h2>
            <div className="grid grid-cols-4 gap-4 pr-8">
                {/* Card */}
                {
                    salesActivity.map((item, index) => {
                        return (
                            <SalesActivityCard key={index} item={item}/>
                        )
                    })
                }
            </div>
        </div>
        {/* INVENTORY SUMMARY */}
        <div className="col-span-4 p-8">
            <h2 className='mb-6 text-xl'>Inventory Summary</h2>
            <div className="">
                {
                    inventorySummary.map((item, index) => {
                        return (
                            <InventorySummaryCard key={index} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
