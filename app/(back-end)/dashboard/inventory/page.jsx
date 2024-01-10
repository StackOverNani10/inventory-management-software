"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, ScrollText, Shirt } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  const optionCards = [
    {
      title: 'Item groups',
      description: 'Create multiple variants of the same item using Item Groups',
      link: '/new',
      linkTitle: 'New Item Group',
      enable: true,
      icon: Boxes,
    },
    {
      title: 'Items',
      description: 'Create standalone items and services that you buy and sell',
      link: '/new',
      linkTitle: 'New Item',
      enable: true,
      icon: Shirt,
    },
    {
      title: 'Composite Items',
      description: 'Bundle different items together and sell them as kits',
      link: '/new',
      linkTitle: 'New Composite Item',
      enable: false,
      icon: Component,
    },
    {
      title: 'Price Lists',
      description: 'Tweak your item prices for specific contacts or transactions',
      link: '/new',
      linkTitle: 'New Price List',
      enable: false,
      icon: ScrollText,
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
