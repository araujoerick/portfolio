"use client";

import React, { useState } from "react";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import { sendContactEmail } from "@/app/actions/contact/form";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await sendContactEmail(formData);
      setSubmitResult(result);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setSubmitResult({
        success: false,
        message: "Erro inesperado ao enviar mensagem",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form action={handleSubmit} className="flex flex-col gap-4">
        <FormInput label="Nome" type="text" placeholder="John Doe" />
        <FormInput label="Email" type="email" placeholder="doejohn@email.com" />
        <FormTextarea label="Mensagem" placeholder="Digite sua mensagem..." />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`neo-border neo-shadow active:neo-shadow-sm hover:neo-shadow-sm w-full cursor-pointer bg-lime-300 p-4 font-bold text-black transition-all duration-200 ease-in-out hover:translate-0.5 active:translate-0.5 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""} `}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {submitResult && (
          <div
            className={`mt-4 rounded p-3 ${submitResult.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} `}
          >
            {submitResult.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
