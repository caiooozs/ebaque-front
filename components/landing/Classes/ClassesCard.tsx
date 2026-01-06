import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import { ClassesDataProps } from "../../Dashboard/classes/dashboardClasses.model";

export const ClassesCard = ({ name, students_length }: ClassesDataProps) => {
  return (
    <>
      <Card className="w-full hover:scale-102 transition-transform cursor-pointer">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{students_length} alunos</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
