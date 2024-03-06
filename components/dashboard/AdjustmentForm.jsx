"use client";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { Minus, Plus } from "lucide-react";
import React from "react";

export default function AdjustmentForm({
  items,
  warehouses,
  suppliers,
  initialData,
  isUpdate,
}) {
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form: (
        <AddInventoryForm
          items={items}
          warehouses={warehouses}
          suppliers={suppliers}
          initialData={initialData}
          isUpdate={isUpdate}
        />
      ),
    },
    {
      title: "Transfer Stock",
      icon: Minus,
      form: (
        <TransferInventoryForm
          items={items}
          warehouses={warehouses}
          initialData={initialData}
          isUpdate={isUpdate}
        />
      ),
    },
  ];
  const [activeTab, setActiveTab] = React.useState("Add Stock");
  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Updated Adjustment" : "New Adjustment"}
        href="/dashboard/inventory/adjustments"
      />
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 w-full max-w-4xl px-4 py-2 bg-white border mx-auto my-4 shadow rounded">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <li key={index} className="mr-2">
                <button
                  onClick={() => setActiveTab(tab.title)}
                  className={`${
                    activeTab === tab.title
                      ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 group"
                      : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
                  }`}
                >
                  <Icon
                    className={`${
                      activeTab === tab.title
                        ? "w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                        : "w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Form */}
      {activeTab === "Add Stock" ? tabs[0].form : tabs[1].form}
    </div>
  );
}
