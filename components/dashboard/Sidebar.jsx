"use client"
import { BaggageClaim, BarChart3, Cable, ChevronLeft, Computer, Folder, Home, ShoppingBag, ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'
  
export default function Sidebar() {
  const inventoryLinks = [
    {
        title: 'Items',
        href: '/dashboard/inventory/items/new',
    },
    {
        title: 'Categories',
        href: '/dashboard/inventory/categories/new',
    },
    {
        title: 'Brands',
        href: '/dashboard/inventory/brands/new',
    },
    {
        title: 'Units',
        href: '/dashboard/inventory/units/new',
    },
    {
        title: 'Warehouse',
        href: '/dashboard/inventory/warehouse/new',
    },
    {
        title: 'Inventory Adjustment',
        href: '#',
    },
  ];
  const salesLinks = [
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'Sales Orders',
        href: '#',
    },
    {
        title: 'Packages',
        href: '#',
    },
    {
        title: 'Shipments',
        href: '#',
    },
    {
        title: 'Invoices',
        href: '#',
    },
    {
        title: 'Sales Receipts',
        href: '#',
    },
    {
        title: 'Payment Received',
        href: '#',
    },
    {
        title: 'Sales Returns',
        href: '#',
    },
    {
        title: 'Credit Notes',
        href: '#',
    },
  ];
  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50 fixed'>
        {/* Top Part */}
        <div className="flex flex-col">
            {/* Logo */}
            <Link href='#' className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                <Computer/>
                <span className='text-xl font-semibold'>Inventory</span>
            </Link>
            {/* Links */}
            <nav className='flex flex-col gap-3 px-3 py-6'>
                <Link href='/dashboard/home' className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'>
                    <Home className='w-4 h-4'/>
                    <span>Home</span>
                </Link>
                <SidebarDropdownLink title='Inventory' links={inventoryLinks} icon={BaggageClaim}/>
                <SidebarDropdownLink title='Sales' links={salesLinks} icon={ShoppingBag}/>
                <button className='flex items-center space-x-2 p-2'>
                    <ShoppingBasket className='w-4 h-4'/>
                    <span>Purchases</span>
                </button>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <Cable className='w-4 h-4'/>
                    <span>Integrations</span>
                </Link>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <BarChart3 className='w-4 h-4'/>
                    <span>reports</span>
                </Link>
                <Link href='#' className='flex items-center space-x-2 p-2'>
                    <Folder className='w-4 h-4'/>
                    <span>Documents</span>
                </Link>
            </nav>
            {/* Subscription Card */}
            <SubscriptionCard/>
        </div>
        
        {/* Footer Icon */}
        <div className="flex flex-col">
            {/* Bottom */}
            <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
                <ChevronLeft/>
            </button>
        </div>
    </div>
  )
}
