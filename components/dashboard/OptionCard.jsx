"use client"
import Link from 'next/link';
import React from 'react'

export default function OptionCard({optionData}) {
    const {title, icon:Icon, description, link, linkTitle, enable} = optionData;
    return (
    <div className=" flex flex-col items-center justify-center bg-white shadow-md gap-4 p-6 rounded">
        <h2 className='text-xl font-semibold'>{title}</h2>
        <div className="">
            <Icon strokeWidth='.5px' className='w-36 h-36'/>
        </div>
        <div>
            <p className="line-clamp-1">
                {description}
            </p>
        </div>
        {
            enable?(
                <Link href={link} className='inline-flex items-center space-x-2 px-3 py-2 rounded-sm bg-blue-600 text-white'>
                    {linkTitle}
                </Link>
            ):(
                <button className='inline-flex items-center space-x-2 px-3 py-2 rounded-sm bg-blue-600 text-white'>Enable Now</button>
            )
        }
    </div>
  )
}