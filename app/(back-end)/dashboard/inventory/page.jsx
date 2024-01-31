"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, ScrollText, Shirt } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  const optionCards = [
    {
      title: 'Items',
      description: 'Create standalone items and services that you buy and sell',
      link: '/dashboard/inventory/items/new',
      linkTitle: 'New Item',
      enable: true,
      icon: Shirt,
    },
    {
      title: 'Categories',
      description: 'Bundle different items together and sell them as kits',
      link: '/dashboard/inventory/categories/new',
      linkTitle: 'New Category',
      enable: true,
      icon: Boxes,
    },
    {
      title: 'Brands',
      description: 'Tweak your item prices for specific contacts or transactions',
      link: '/dashboard/inventory/brands/new',
      linkTitle: 'New Brand',
      enable: true,
      icon: ScrollText,
    },
    {
      title: 'Warehouse',
      description: '',
      link: '/dashboard/inventory/warehouse/new',
      linkTitle: 'New Warehouse',
      enable: true,
      icon: ScrollText,
    },
    {
      title: 'Units',
      description: '',
      link: '/dashboard/inventory/units/new',
      linkTitle: 'New Unit',
      enable: true,
      icon: Component,
    },
]
  return (
    <div>
      <FixedHeader newLink='/dashboard/inventory/items/new'/>
      <div className="grid grid-col-1 lg:grid-cols-2 px-16 py-8 gap-6">
        {
          optionCards.map((card, index) => {
            return (
              <OptionCard key={index} optionData={card}/>
            )
          })
        }
      </div>
    </div>
  )
}
