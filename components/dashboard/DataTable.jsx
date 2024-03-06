import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

export default function DataTable({
  columns = [],
  data = [],
  resourceTitle,
  endpoint,
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {data.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((columnName, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-4">
                    {
                      columnName.includes(".")
                        ? // If the column name contains a dot, it's a nested object
                          // Use the first part of the column name as the header
                          columnName.split(".")[0]
                        : columnName === "imageUrl"
                        ? (columnName = "image")
                        : columnName === "contactPerson"
                        ? (columnName = "contact person")
                        : columnName // Otherwise, display the column name as is
                    }
                  </th>
                );
              })}
              <th scope="col" className="px-6 py-3">
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
                  {columns.map((columnName, index) => (
                    <td key={index} className="px-6 py-4">
                      {columnName.includes(".") ? (
                        // If the column name contains a dot, it's a nested object
                        // Access the nested key using reduce
                        columnName
                          .split(".")
                          .reduce((obj, key) => obj[key], item)
                      ) : columnName === "createdAt" ||
                        columnName === "updatedAt" ? (
                        // Convert date columns to a more readable format
                        new Date(item[columnName]).toLocaleDateString()
                      ) : columnName === "imageUrl" ? (
                        // Special handling for imageUrl to render an image
                        <img
                          src={item[columnName]}
                          alt={`Image for ${resourceTitle}`}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      ) : (
                        // Otherwise, display the value as is
                        item[columnName]
                      )}
                    </td>
                  ))}

                  <td className="flex items-center px-6 py-4 space-x-4 text-right">
                    <Link
                      href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`}
                      className="flex items-center space-x-1 font-medium text-blue-600 dark:text-blue-500"
                    >
                      <Pencil className="w-4 h-4" />
                      <span>Edit</span>
                    </Link>
                    <DeleteButton id={item.id} endpoint={endpoint} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center bg-white w-full p-4">
          <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
            There is no Data to Display
          </p>
        </div>
      )}
    </div>
  );
}
