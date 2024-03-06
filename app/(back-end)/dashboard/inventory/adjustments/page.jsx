import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Adjustments() {
  const addAdjustmentsData = getData("adjustments/add");
  const transferAdjustmentsData = getData("adjustments/transfer");

  const [addAdjustments, transferAdjustments] = await Promise.all([
    addAdjustmentsData,
    transferAdjustmentsData,
  ]);

  const addColumns = [
    "referenceNumber",
    "item.title",
    "addStockQty",
    "receivingWarehouse.title",
    "notes",
    "createdAt",
  ];

  const transferColumns = [
    "referenceNumber",
    "item.title",
    "transferStockQty",
    "givingWarehouse.title",
    "receivingWarehouse.title",
    "notes",
    "createdAt",
  ];
  return (
    <div>
      {/* Header */}
      <FixedHeader
        title="Adjustments"
        newLink="/dashboard/inventory/adjustments/new"
      />
      {/* Tables */}
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          Stock Increments Adjustments
        </h2>
        <DataTable
          data={addAdjustments}
          columns={addColumns}
          resourceTitle="adjustments"
          endpoint="adjustments/add"
        />
      </div>
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          Stock Transfer Adjustments
        </h2>
        <DataTable
          data={transferAdjustments}
          columns={transferColumns}
          resourceTitle="adjustments"
          endpoint="adjustments/transfer"
        />
      </div>
    </div>
  );
}
