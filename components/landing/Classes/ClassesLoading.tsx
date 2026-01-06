import { Spinner } from "@/components/ui/spinner";

const ClassesLoading = () => {
  return (
    <div className="flex justify-center items-center h-32 gap-4">
      Buscando turmas...
      <Spinner className="size-4" />
    </div>
  );
};
export default ClassesLoading;
