import { useState, useEffect } from "react";
import type { Launch, UseLaunchResult } from "../types/launch";

const useLaunch = (id: string): UseLaunchResult => {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [rocketName, setRocketName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLaunch = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.spacexdata.com/v4/launches/${id}`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: Launch = await response.json();
        setLaunch(data);

        const rocketResponse = await fetch(
          `https://api.spacexdata.com/v4/rockets/${data.rocket}`
        );

        if (rocketResponse.ok) {
          const rocketData = await rocketResponse.json();
          setRocketName(rocketData.name);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch launch");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaunch();
  }, [id]);

  return { launch, rocketName, isLoading, error };
};

export default useLaunch;
