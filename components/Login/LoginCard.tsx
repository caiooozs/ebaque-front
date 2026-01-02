"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Separator } from "../ui/separator";
import LoginForm from "./loginForm";

const LoginCard = () => {
  return (
    <Card className="w-xl">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Insira suas credenciais para continuar
        </CardDescription>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default LoginCard;
