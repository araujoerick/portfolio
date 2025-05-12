import React from "react";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
}

const FormTextarea = ({ label, placeholder }: FormTextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-lg text-neutral-800">
        {label}
      </label>
      <textarea
        id={label}
        name={label}
        placeholder={placeholder}
        className="neo-border h-32 p-2 outline-lime-300 hover:outline-2 focus:outline-2"
      />
    </div>
  );
};

export default FormTextarea;
