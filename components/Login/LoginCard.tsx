import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";

const LoginCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>EBAQUE - Login</CardTitle>
        <CardDescription>
          Insira suas credenciais para continuar
        </CardDescription>
      </CardHeader>
      <CardContent>{/* Login form content */}</CardContent>
      <CardFooter>
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  );
};
