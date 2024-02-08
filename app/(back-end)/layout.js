"use client"
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useState } from 'react'

export default function Layout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div className='flex'>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
            <main className='lg:ml-60 ml-0 w-full bg-slate-100 min-h-screen'>
                <Header setShowSideBar={setShowSideBar} />
                {children}
            </main>
        </div>
    )
}
