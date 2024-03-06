"use client";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddInventoryForm({
  items,
  warehouses,
  suppliers,
  initialData,
  isUpdate,
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.replace("/dashboard/inventory/adjustments");
  }
  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/adjustments/add/${initialData.id}`,
        data,
        "Adjustments",
        redirect
      );
    } else {
      makePostRequest(
        setLoading,
        "api/adjustments/add",
        data,
        "Add Stock Adjustment",
        reset
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Reference Number"
          name="referenceNumber"
          register={register}
          errors={errors}
          defaultValue={`ADJ-${new Date().getTime()}`}
        />
        <SelectInput
          label="Select the Item"
          name="itemId"
          register={register}
          className="w-full"
          options={items}
        />
        <SelectInput
          label="Select the Supplier"
          name="supplierId"
          register={register}
          className="w-full"
          options={suppliers}
        />
        <SelectInput
          label="Select the Warehouse that will receive the Stock"
          name="receivingWarehouseId"
          register={register}
          className="w-full"
          options={warehouses}
        />
        <TextInput
          label="Enter Quantity of Stock to Add"
          name="addStockQty"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextareaInput
          label="Adjustments Notes"
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        title={isUpdate ? "Updated Adjustment" : "New Adjustment"}
      />
    </form>
  );
}
