import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink({ href, title }) {
  return (
    <Link href={href} className='flex items-center justify-between pl-8 pr-4 py-2 space-x-3 rounded-md hover:bg-slate-900 transition-all duration-300'>
        <span className='text-sm'>{title}</span>
        <PlusCircle className='w-4 h-4'/>
    </Link>
  )
}
