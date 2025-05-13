"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import { sendContactEmail } from "@/app/actions/contact/form";
import {
  ContactFormData,
  contactFormSchema,
} from "@/app/actions/contact/form/schema";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const formData = new FormData();
      formData.append("Nome", data.name);
      formData.append("Email", data.email);
      formData.append("Mensagem", data.message);

      const result = await sendContactEmail(formData);
      setSubmitResult(result);

      if (result.success) {
        reset();
      }
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
      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-3`}>
        <FormInput
          label="Nome"
          type="text"
          placeholder="John Doe"
          register={register("name")}
          errors={errors.name?.message ? [errors.name.message] : undefined}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="doejohn@email.com"
          register={register("email")}
          errors={errors.email?.message ? [errors.email.message] : undefined}
        />

        <FormTextarea
          label="Mensagem"
          placeholder="Digite sua mensagem..."
          register={register("message")}
          errors={
            errors.message?.message ? [errors.message.message] : undefined
          }
        />

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
