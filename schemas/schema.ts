import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
