import { useState, useEffect } from "react";
import type { Launch, LaunchesResponse } from "../types/launch";

const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://api.spacexdata.com/v4/launches/query",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: {},
              options: {
                page: 1,
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
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch launches");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  return { launches, isLoading, error };
};

export default useLaunches;
