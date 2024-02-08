import { X } from "lucide-react";
import React from "react";

export default function FormHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between bg-white px-16 py-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <a href={href}>
        <X />
      </a>
    </div>
  );
}
