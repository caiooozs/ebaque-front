import DashboardClassesView from "@/components/Dashboard/classes/dashboardClasses.view";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const ClassesPage = () => {
  return (
    <>
      <div className="w-full flex flex-col p-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-semibold text-2xl">Turmas</h1>
            <p className="opacity-60 text-sm">
              Acesse todas as turmas cadastradas
            </p>
          </div>
          <div>
            <Button>
              Adicionar Turma <PlusIcon />
            </Button>
          </div>
        </div>
        <DashboardClassesView />
      </div>
    </>
  );
};

export default ClassesPage;
