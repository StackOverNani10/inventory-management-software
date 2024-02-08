"use client";
import React from "react";

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 leading-6 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder={`Type the ${label}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
