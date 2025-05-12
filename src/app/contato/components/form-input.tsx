import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
}

const FormInput = ({ label, type, placeholder }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-lg text-neutral-800">
        {label}
      </label>
      <input
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        className="neo-border p-2 outline-lime-300 hover:outline-2 focus:outline-2"
      />
    </div>
  );
};

export default FormInput;
