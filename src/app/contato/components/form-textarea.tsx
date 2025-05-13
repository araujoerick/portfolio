import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors?: string[];
}

const FormTextarea = ({
  label,
  placeholder,
  register,
  errors,
}: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-lg font-semibold text-neutral-800">
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        {...register}
        className={`neo-border h-32 p-2 outline-lime-300 hover:outline-2 focus:outline-2 ${
          errors && errors.length > 0 && "outline-2 outline-red-400"
        }`}
      />
      {errors && errors.length > 0 && (
        <div className="mt-1 text-sm leading-4 text-red-500">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormTextarea;
