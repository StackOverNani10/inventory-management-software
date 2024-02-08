"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewUnit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    makePostRequest(setLoading, "api/units", data, "Unit", reset);
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Unit" href="/dashboard/inventory/units" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton isLoading={loading} title="Unit" />
      </form>
    </div>
  );
}
