import {
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FixedHeader({ title, newLink }) {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-5">
      <button className="text-2xl">{title}</button>
      <div className="flex gap-4">
        {/* New */}
        <Link
          href={newLink}
          className="flex items-center space-x-2 p-1 px-3 rounded-sm bg-blue-600 text-white"
        >
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden border border-gray-300">
          <button className="p-2 bg-gray-300 border-r border-gray-400">
            <List className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-100">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
        {/* More */}
        <button className="p-2 bg-gray-100 rounded-md border border-gray-300">
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {/* Help */}
        <button className="p-2 bg-orange-600 text-white rounded-md">
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
