import { supabase } from "@/lib/supaBaseClient";
import { ClassesDataProps } from "./dashboardClasses.model";

export async function getClasses(): Promise<ClassesDataProps[]> {
  const response = await supabase.from("classes").select("*");
  if (response.error) {
    console.error("Error fetching dashboard data:", response.error);
    return [];
  }
  return response.data;
}
