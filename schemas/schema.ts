import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string(),
});
