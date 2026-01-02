import { supabase } from "@/lib/supaBaseClient";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Erro ao fazer login");
      console.error(error);
    } else {
      toast.success("Login realizado com sucesso!");
    }
    router.push("/dashboard");
  }

  return { email, setEmail, password, setPassword, handleLogin };
}
