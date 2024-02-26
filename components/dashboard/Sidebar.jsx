"use client";
import {
  BaggageClaim,
  BarChart3,
  Cable,
  ChevronLeft,
  FileBox,
  Folder,
  Home,
  ShoppingBag,
  ShoppingBasket,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar({ showSideBar, setShowSideBar }) {
  const inventoryLinks = [
    {
      title: "All",
      href: "/dashboard/inventory",
    },
    {
      title: "Items",
      href: "/dashboard/inventory/items",
    },
    {
      title: "Categories",
      href: "/dashboard/inventory/categories",
    },
    {
      title: "Brands",
      href: "/dashboard/inventory/brands",
    },
    {
      title: "Units",
      href: "/dashboard/inventory/units",
    },
    {
      title: "Warehouse",
      href: "/dashboard/inventory/warehouse",
    },
    {
      title: "Suppliers",
      href: "/dashboard/inventory/suppliers",
    },
    {
      title: "Inventory Adjustment",
      href: "/dashboard/inventory/adjustments",
    },
  ];
  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payment Received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];
  return (
    <div
      className={`${
        showSideBar
          ? "w-60 min-h-screen z-50 bg-slate-800 text-slate-50 fixed lg:block"
          : "w-60 min-h-screen z-50 bg-slate-800 text-slate-50 fixed hidden lg:block"
      }`}
    >
      {/* Top Part */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex justify-between">
          <Link
            href="/dashboard/home"
            className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full"
          >
            <FileBox />
            <span className="text-xl font-semibold">Inventory</span>
          </Link>
          <button
            onClick={() => setShowSideBar(false)}
            className="bg-slate-950 px-4 py-3 lg:hidden"
          >
            <X className=" w-6 h-6 text-white" />
          </button>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="/dashboard/home/overview"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropdownLink
            title="Inventory"
            links={inventoryLinks}
            icon={BaggageClaim}
            setShowSideBar={setShowSideBar}
          />
          <SidebarDropdownLink
            title="Sales"
            links={salesLinks}
            icon={ShoppingBag}
          />
          <button
            onClick={() => setShowSideBar(false)}
            className="flex items-center space-x-2 p-2"
          >
            <ShoppingBasket className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link
            href="#"
            onClick={() => setShowSideBar(false)}
            className="flex items-center space-x-2 p-2"
          >
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link
            href="#"
            onClick={() => setShowSideBar(false)}
            className="flex items-center space-x-2 p-2"
          >
            <BarChart3 className="w-4 h-4" />
            <span>reports</span>
          </Link>
          <Link
            href="#"
            onClick={() => setShowSideBar(false)}
            className="flex items-center space-x-2 p-2"
          >
            <Folder className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        {/* Subscription Card */}
        <SubscriptionCard />
      </div>

      {/* Footer Icon */}
      <div className="flex flex-col">
        {/* Bottom */}
        <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
