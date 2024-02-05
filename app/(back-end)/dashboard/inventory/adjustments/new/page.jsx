"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/formInputs/SelectInput';
import SubmitButton from '@/components/formInputs/SubmitButton';
import TextInput from '@/components/formInputs/TextInput';
import TextareaInput from '@/components/formInputs/TextareaInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewAdjustments() {
  const branches = [
    {
      label: 'Branch A',
      value: 'hixcg231q89'
    },
    {
      label: 'Branch B',
      value: '6v95976cv0c'
    },
    {
      label: 'Branch C',
      value: 'd1n289ydn9'
    },
  ]; 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data){
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/adjustments`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if(response.ok){
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
        {/* Header */}
        <FormHeader title='New Adjustment' href='/dashboard/inventory/'/>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Enter Amount of Stock to Transfer" name="transferStockQty" type="number" register={register} errors={errors} className='w-full'/>
            <SelectInput label="Select the Branch that will receive the Stock" name="receivingBranchId" register={register} className='w-full' options={branches}/>
            <TextareaInput label="Adjustments Notes" name="notes" register={register} errors={errors}/>
          </div>
          <SubmitButton isLoading={loading} title="Adjustment"/>
        </form>
    </div>
  )
}