"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import ImageInput from '@/components/formInputs/ImageInput';
import SelectInput from '@/components/formInputs/SelectInput';
import SubmitButton from '@/components/formInputs/SubmitButton';
import TextInput from '@/components/formInputs/TextInput';
import TextareaInput from '@/components/formInputs/TextareaInput';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState('');
  const categories = [
    {
      label: 'Electronics',
      value: 'eraukj817689xas'
    },
    {
      label: 'Clothes',
      value: 'g88709h8a65h'
    }
  ]; 
  const units = [
    {
      label: 'Kg',
      value: 'subo98127hnxqoi'
    },
    {
      label: 'Pcs',
      value: '12ssgugas9819'
    }
  ]; 
  const brands = [
    {
      label: 'HP',
      value: 'ascun9821i90'
    },
    {
      label: 'MSI',
      value: 'asdcjn9180s10'
    }
  ];
  const warehouses = [
    {
      label: 'Warehouse A',
      value: 'sdcjno23r1wd1'
    },
    {
      label: 'Warehouse B',
      value: 'cwec2b6b769n'
    },
    {
      label: 'Warehouse C',
      value: 'c2b6b769n'
    }
  ];
  const suppliers = [
    {
      label: 'Supplier A',
      value: 'sdcjno23r1wd1'
    },
    {
      label: 'Supplier B',
      value: 'cwec2b6b769n'
    },
    {
      label: 'Supplier C',
      value: 'c2b6b769n'
    }
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data){
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
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
        <FormHeader title='New Item' href='/dashboard/inventory/'/>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Item Title" name="title" register={register} errors={errors} className='w-full'/>
            <SelectInput label="Select the Item Category" name="categoryId" register={register} className='w-full' options={categories}/>
            <TextInput label="Item SKU" name="sku" register={register} errors={errors} className='w-full'/>
            <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} isRequired={false} className='w-full'/>
            <TextInput label="Item Quantity" name="qty" register={register} errors={errors} className='w-full'/>
            <SelectInput label="Select the Item Unit" name="unitId" register={register} className='w-full' options={units}/>
            <SelectInput label="Select the Item Brand" name="brandId" register={register} className='w-full' options={brands}/>
            <TextInput label="Buying Price" name="buyingPrice" type='number' register={register} errors={errors} className='w-full'/>
            <TextInput label="Selling Price" name="sellingPrice" type='number' register={register} errors={errors} className='w-full'/>
            <SelectInput label="Select the Item Supplier" name="supplierId" register={register} className='w-full' options={suppliers}/>
            <TextInput label="Re-Order Point" name="reOrderPoint" type='number' register={register} errors={errors} className='w-full'/>
            <SelectInput label="Select the Item Warehouse" name="warehouseId" register={register} className='w-full' options={warehouses}/>
            <TextInput label="Item Weight in Kgs" name="weight" type='number' register={register} errors={errors} className='w-full'/>
            <TextInput label="Item Dimensions in cm (20 x 30 x 100)" name="dimensions" register={register} errors={errors} className='w-full'/>
            <TextInput label="Item Tax Rate in %" name="taxRate" type='number' register={register} errors={errors} className='w-full'/>
            <TextareaInput label="Item Description" name="description" register={register} errors={errors}/>
            <TextareaInput label="Item Notes" name="notes" register={register} errors={errors}/>
            <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
          </div>
          <SubmitButton isLoading={loading} title="Item"/>
        </form>
    </div>
  )
}
