"use client"
import React from 'react'
import CollapsibleLink from './CollapsibleLink';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function SidebarDropdownLink({ title, links, icon:Icon }) {
  return (
    <Collapsible>
        <CollapsibleTrigger className='flex items-center space-x-2 p-2'>
            <Icon className='w-4 h-4'/>
            <span>{title}</span>
            <ChevronDown className='w-4 h-4'/>
        </CollapsibleTrigger>
        <CollapsibleContent>
            {
                links.map((item, index) => {
                    return(
                        <CollapsibleLink key={index} {...item} />
                    )
                })
            }
        </CollapsibleContent>
    </Collapsible>
  )
}
