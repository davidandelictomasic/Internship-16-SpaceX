import { useState, useEffect } from "react";
import type { Company } from "../types/company";

const useCompany = () => {
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/company");

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: Company = await response.json();
        setCompany(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch company");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompany();
  }, []);

  return { company, isLoading, error };
};

export default useCompany;
