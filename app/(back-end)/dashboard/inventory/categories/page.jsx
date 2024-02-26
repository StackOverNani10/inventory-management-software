import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Categories() {
  const categories = await getData("categories");
  const columns = ["title", "description"];

  return (
    <div>
      {/* Header */}
      <FixedHeader
        title="Categories"
        newLink="/dashboard/inventory/categories/new"
      />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable
          data={categories}
          columns={columns}
          resourceTitle="categories"
          endpoint="categories"
        />
      </div>
    </div>
  );
}
