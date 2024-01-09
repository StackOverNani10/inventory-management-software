"use client"
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function HomeNavBar() {
    const pathname = usePathname();
    const navLinks = 
    [
        {
            title: "Dashboard",
            href:"/dashboard/home/overview",
        },
        {
            title: "Getting Started",
            href:"/dashboard/home/getting-started",
        },
        {
            title: "Recent Updates",
            href:"/dashboard/home/updates",
        },
        {
            title: "Announcements",
            href:"/dashboard/home/announcements",
        },
    ];
    return (
        <div className='h-32 bg-slate-50 p-5 border-b border-slate-300'>
            <div className="flex space-x-3">
                <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
                    <Building2/>
                </div>
                <div className="flex flex-col">
                    <p className='font-semibold text-slate-700'>Hello, Dominguez Co</p>
                    <span className='text-sm'>Daniel</span>
                </div>
            </div>
            <nav className='sticky mt-6 flex space-x-4'>
                {
                    navLinks.map((item) => {
                        return (
                            <Link href={item.href} key={item.title} className={`${pathname===item.href?'py-1 border-b-2 border-blue-600':'py-1'}`}>
                                {item.title}
                            </Link>
                        )
                    })   
                }
            </nav>
        </div>
  )
}
