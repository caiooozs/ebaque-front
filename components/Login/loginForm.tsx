import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/schemas/schema";
import { LoginFormType } from "@/schemas/schema";
import { Button } from "../ui/button";
import useAuth from "@/services/useAuth";

const LoginForm = () => {
  const { handleLogin } = useAuth();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@dominio.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage className="font-light text-sm" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} type="password" />
                </FormControl>
                <FormMessage className="font-extralight text-md" />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
