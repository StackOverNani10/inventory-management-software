import React from "react";

export default function InventorySummaryCard({ item }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white shadow px-4 py-2 mb-4 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all duration-300">
      <h2 className="text-slate-500 text-sm uppercase">{item.title}</h2>
      <h4 className="text-2xl">{item.number}</h4>
    </div>
  );
}
