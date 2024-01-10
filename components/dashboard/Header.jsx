import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow'>
      <div className="flex gap-3">
        {/* Recent activities */}
        <button>
          <History className='w-6 h-6'/>
        </button>
        {/* Search */}
        <SearchInput/>
      </div>
      <div className="flex items-center gap-3">
        {/* Quick create */}
        <div className="pr-2 border-r border-gray-300">
          <button className='p-1 rounded-lg bg-blue-600'>
            <Plus className='text-slate-50 w-4 h-4'/>
          </button>
        </div>
        <div className="flex border-r border-gray-300 space-x-2">
          <button className='p-1 rounded-lg hover:bg-slates-200'>
            <Users className='text-slate-900 w-4 h-4'/>
          </button>
          <button className='p-1 rounded-lg hover:bg-slates-200'>
            <Bell className='text-slate-900 w-4 h-4'/>
          </button>
          <button className='p-1 rounded-lg hover:bg-slates-200'>
            <Settings className='text-slate-900 w-4 h-4'/>
          </button>
        </div>
        {/* User profile */}
        <div className="flex gap-4">
          <button className='flex items-center'>
            <span>Nani</span>
            <ChevronDown className='w-3 h-4'/>
          </button>
          <button>
            <Image src='/snowme.jpg' alt='user image' width={54} height={96} className='w-8 h-8 rounded-full border border-slate-800'/>
          </button>
          <button>
            <LayoutGrid className='w-6 h-6 text-slate-900'/>
          </button>
        </div>
        {/* Menu */}
      </div>
    </div>
  )
}
