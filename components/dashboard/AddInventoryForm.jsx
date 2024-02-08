"use client";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddInventoryForm({ items, warehouses }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    makePostRequest(
      setLoading,
      "api/adjustments/add",
      data,
      "Adjustments",
      reset
    );
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
          className="w-full"
          defaultValue={`ADJ-${new Date().getTime()}`}
        />
        <SelectInput
          label="Select the Item"
          name="itemId"
          register={register}
          className="w-full"
          options={items}
        />
        <TextInput
          label="Enter Quantity of Stock to Add"
          name="addStockQty"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select the Warehouse that will receive the Stock"
          name="receivingWarehouseId"
          register={register}
          className="w-full"
          options={warehouses}
        />
        <TextareaInput
          label="Adjustments Notes"
          name="notes"
          register={register}
          errors={errors}
        />
      </div>
      <SubmitButton isLoading={loading} title="Adjustment" />
    </form>
  );
}
