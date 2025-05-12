"use server";

import { z } from "zod";
import emailjs from "@emailjs/nodejs";
import { contactFormSchema } from "./schema";

export async function sendContactEmail(formData: FormData) {
  const SERVICEID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATEID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLICKEY = process.env.EMAILJS_PUBLIC_KEY;
  const PRIVATEKEY = process.env.EMAILJS_PRIVATE_KEY;

  const rawData = {
    name: formData.get("Nome"),
    email: formData.get("Email"),
    message: formData.get("Mensagem"),
  };

  try {
    const validatedData = contactFormSchema.parse(rawData);

    emailjs.init({
      publicKey: PUBLICKEY!,
      privateKey: PRIVATEKEY!,
    });

    const response = await emailjs.send(SERVICEID!, TEMPLATEID!, {
      from_name: validatedData.name,
      from_email: validatedData.email,
      message: validatedData.message,
    });

    console.log("Resposta do EmailJS:", response.status, response.text);

    return {
      success: true,
      message: "Email enviado com sucesso!",
      status: response.status,
      text: response.text,
    };
  } catch (error) {
    console.error("Erro no envio do email:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Erro de validação",
        errors: JSON.parse(JSON.stringify(error.errors)),
      };
    }

    return {
      success: false,
      message: "Erro ao enviar email",
      error: String(error),
    };
  }
}
