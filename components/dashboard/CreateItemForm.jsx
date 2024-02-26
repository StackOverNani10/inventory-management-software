"use client";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
  initialData,
  isUpdate,
}) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
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
    router.replace("/dashboard/inventory/items");
  }
  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/items/${initialData.id}`,
        data,
        "Item",
        redirect
      );
      setImageUrl("");
    } else {
      makePostRequest(setLoading, "api/items", data, "Item", reset);
      setImageUrl("");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Item Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select the Item Category"
            name="categoryId"
            register={register}
            className="w-full"
            options={categories}
          />
          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            isRequired={false}
            className="w-full"
          />
          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select the Item Unit"
            name="unitId"
            register={register}
            className="w-full"
            options={units}
          />
          <SelectInput
            label="Select the Item Brand"
            name="brandId"
            register={register}
            className="w-full"
            options={brands}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Selling Price"
            name="sellingPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select the Item Supplier"
            name="supplierId"
            register={register}
            className="w-full"
            options={suppliers}
          />
          <TextInput
            label="Re-Order Point"
            name="reOrderPoint"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select the Item Warehouse"
            name="warehouseId"
            register={register}
            className="w-full"
            options={warehouses}
          />
          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Dimensions in cm (20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Tax Rate in %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Item Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Item Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Update Item" : "New Item"}
        />
      </form>
    </div>
  );
}
