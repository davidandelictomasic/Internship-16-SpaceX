import { useState, useEffect } from "react";
import type { Ship } from "../types/ship";

const useShip = (id: string) => {
  const [ship, setShip] = useState<Ship | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShip = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.spacexdata.com/v4/ships/${id}`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: Ship = await response.json();
        setShip(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch ship");
      } finally {
        setIsLoading(false);
      }
    };

    fetchShip();
  }, [id]);

  return { ship, isLoading, error };
};

export default useShip;
