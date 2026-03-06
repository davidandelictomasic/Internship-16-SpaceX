import { useState, useEffect } from "react";
import type { Launch, LaunchesResponse } from "../types/launch";

const useLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunches = async () => {
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

      const data: LaunchesResponse = await response.json();
      setLaunches(data.docs);
    };

    fetchLaunches();
  }, []);

  return { launches };
};

export default useLaunches;
