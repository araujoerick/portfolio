"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import { sendContactEmail } from "@/app/actions/contact/form";
import {
  ContactFormData,
  contactFormSchema,
} from "@/app/actions/contact/form/schema";
import SubmitButton from "./submit-button";

const ContactForm = () => {
  const [buttonState, setButtonState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
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

  useEffect(() => {
    if (buttonState === "success" || buttonState === "error") {
      const timer = setTimeout(() => {
        setButtonState("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [buttonState]);

  const onSubmit = async (data: ContactFormData) => {
    setButtonState("submitting");
    setSubmitResult(null);

    try {
      const formData = new FormData();
      formData.append("Nome", data.name);
      formData.append("Email", data.email);
      formData.append("Mensagem", data.message);

      const result = await sendContactEmail(formData);
      setSubmitResult(result);

      if (result.success) {
        setButtonState("success");
        reset();
      } else {
        setButtonState("error");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);

      setButtonState("error");
      setSubmitResult({
        success: false,
        message: "Erro inesperado ao enviar mensagem",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        <SubmitButton buttonState={buttonState} submitResult={submitResult} />
      </form>
    </div>
  );
};

export default ContactForm;
