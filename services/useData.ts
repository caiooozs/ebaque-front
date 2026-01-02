import { supabase } from "@/lib/supaBaseClient";

export default function useData() {
  async function getClasses() {
    const { data, error } = await supabase.from("classes").select("*");
    if (error) {
      console.error("Error fetching classes:", error);
      return [];
    }
    return data;
  }

  return { getClasses };
}
