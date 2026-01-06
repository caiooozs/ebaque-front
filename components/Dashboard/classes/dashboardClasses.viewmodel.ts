"use client";
import { useState, useEffect } from "react";
import { ClassesDataProps } from "./dashboardClasses.model";
import { getClasses } from "./dashboardClasses.service";

export function useDashboardClassesViewModel() {
  const [classes, setClasses] = useState<ClassesDataProps[]>([]);
  const [error, setClassesError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function loadClasses() {
    try {
      setLoading(true);
      const data = await getClasses();
      setClasses(data);
    } catch (error) {
      setClassesError("Falha ao carregar as turmas");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadClasses();
  }, []);

  return {
    classes,
    error,
    loading,
    reloadClasses: loadClasses,
  };
}
