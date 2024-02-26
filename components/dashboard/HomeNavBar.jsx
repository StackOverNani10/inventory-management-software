"use client";
import {
  Building2,
  FileDown,
  LayoutDashboard,
  Megaphone,
  RollerCoaster,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNavBar() {
  const pathname = usePathname();
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
      icon: LayoutDashboard,
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
      icon: RollerCoaster,
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
      icon: FileDown,
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
      icon: Megaphone,
    },
  ];
  return (
    <div className="h-32 bg-slate-50 p-5 border-b border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-slate-700">Hello, Dominguez Co</p>
          <span className="text-sm">Daniel</span>
        </div>
      </div>
      <nav className="sticky flex space-x-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {navLinks.map((item) => {
            return (
              <li className="me-2" key={item.title}>
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                      : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  }`}
                >
                  {item.icon && (
                    <item.icon
                      className={`${
                        pathname === item.href
                          ? "w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                          : "w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      }`}
                    />
                  )}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
