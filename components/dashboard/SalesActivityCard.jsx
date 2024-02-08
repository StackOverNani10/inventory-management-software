import { CheckSquare2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SalesActivityCard({ item }) {
  return (
    <Link
      href={item.href}
      className="flex items-center flex-col gap-3 bg-white shadow px-3 py-4 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all duration-300"
    >
      <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
      <small className="text-slate-500">{item.unit}</small>
      <div className="flex items-center space-x-2 text-slate-500">
        <CheckSquare2 className="w-4 h-4" />
        <span className="text-xs uppercase">{item.title}</span>
      </div>
    </Link>
  );
}
