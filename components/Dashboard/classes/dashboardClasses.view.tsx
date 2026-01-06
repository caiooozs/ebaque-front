"use client";

import { Spinner } from "@/components/ui/spinner";
import { useDashboardClassesViewModel } from "./dashboardClasses.viewmodel";
import { ClassesCard } from "@/components/landing/Classes/ClassesCard";
import ClassesLoading from "@/components/landing/Classes/ClassesLoading";
const DashboardClassesView = () => {
  const { classes, error, loading } = useDashboardClassesViewModel();
  if (loading) return <ClassesLoading />;
  if (error) return <div>{error}</div>;
  if (!classes.length)
    return <p className="text-center p-12">Nenhuma turma encontrada.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((classItem) => (
        <ClassesCard
          key={classItem.name}
          name={classItem.name}
          students_length={classItem.students_length}
        />
      ))}
    </div>
  );
};
export default DashboardClassesView;
