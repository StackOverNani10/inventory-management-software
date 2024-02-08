import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DataTable({ columns = [], data = [], resourceTitle }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((columnName, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 font-medium">
                  {columnName}
                </th>
              );
            })}
            <th scope="col" className="px-6 py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {columns.map((columnName, index) => {
                  return (
                    <td key={index} className="px-6 py-4">
                      {item[columnName]}
                    </td>
                  );
                })}
                <td className="flex items-center px-6 py-4 space-x-4 text-right">
                  <Link
                    href={`/dashboard/inventory/brands/${resourceTitle}/${item.id}`}
                    className="flex items-center space-x-1 font-medium text-blue-600 dark:text-blue-500"
                  >
                    <Pencil className="w-4 h-4" />
                    <span>Edit</span>
                  </Link>
                  <button className="flex items-center space-x-1 font-medium text-red-600 dark:text-red-500">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
