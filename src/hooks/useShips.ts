import { useState, useEffect, useCallback } from "react";
import type { Ship, ShipsResponse } from "../types/ship";

const useShips = (search: string) => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setShips([]);
    setPage(1);
    setHasNextPage(false);
  }, [search]);

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
                page,
                limit: 10,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: ShipsResponse = await response.json();
        setShips((prev) => (page === 1 ? data.docs : [...prev, ...data.docs]));
        setHasNextPage(data.hasNextPage);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch ships");
      } finally {
        setIsLoading(false);
      }
    };

    fetchShips();
  }, [page, search]);

  const loadMore = useCallback(() => {
    if (hasNextPage && !isLoading) {
      setPage((prev) => prev + 1);
    }
  }, [hasNextPage, isLoading]);

  return { ships, isLoading, error, hasNextPage, loadMore };
};

export default useShips;
