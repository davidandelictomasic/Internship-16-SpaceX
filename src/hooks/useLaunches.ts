import { useState, useEffect } from "react";
import type { Launch, LaunchesResponse } from "../types/launch";

const useLaunches = (page: number, search: string) => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  useEffect(() => {
    const fetchLaunches = async () => {
      setIsLoading(true);

      const query: Record<string, unknown> = {};

      if (search) {
        query.name = { $regex: search, $options: "i" };
      }

      try {
        const response = await fetch(
          "https://api.spacexdata.com/v4/launches/query",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query,
              options: {
                page,
                limit: 10,
                sort: { date_unix: -1 },
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: LaunchesResponse = await response.json();
        setLaunches(data.docs);
        setTotalPages(data.totalPages);
        setHasNextPage(data.hasNextPage);
        setHasPrevPage(data.hasPrevPage);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch launches");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaunches();
  }, [page, search]);

  return { launches, isLoading, error, totalPages, hasNextPage, hasPrevPage };
};

export default useLaunches;
