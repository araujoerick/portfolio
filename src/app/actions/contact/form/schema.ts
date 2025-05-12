import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." })
    .max(500, { message: "Mensagem não pode ter mais de 500 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
