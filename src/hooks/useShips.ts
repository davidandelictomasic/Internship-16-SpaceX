import { useState, useEffect } from "react";
import type { Ship, ShipsResponse } from "../types/ship";

const useShips = (search: string) => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShips = async () => {
      setIsLoading(true);

      const query: Record<string, unknown> = {};

      if (search) {
        query.name = { $regex: search, $options: "i" };
      }

      try {
        const response = await fetch(
          "https://api.spacexdata.com/v4/ships/query",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query,
              options: {
                page: 1,
                limit: 10,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: ShipsResponse = await response.json();
        setShips(data.docs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch ships");
      } finally {
        setIsLoading(false);
      }
    };

    fetchShips();
  }, [search]);

  return { ships, isLoading, error };
};

export default useShips;
