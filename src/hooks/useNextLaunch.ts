import { useState, useEffect } from "react";
import type { Launch, CountdownTime, UseNextLaunchResult } from "../types/launch";

const useNextLaunch = (): UseNextLaunchResult => {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [countdown, setCountdown] = useState<CountdownTime | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestLaunch = async () => {
      try {
        const response = await fetch(
          "https://api.spacexdata.com/v4/launches/latest"
        );

        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data: Launch = await response.json();
        setLaunch(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch launch"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestLaunch();
  }, []);

  useEffect(() => {
    if (!launch) return;

    const launchDate = new Date(launch.date_utc);
    launchDate.setFullYear(launchDate.getFullYear() + 3);
    launchDate.setMonth(launchDate.getMonth() + 6);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate.getTime() - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [launch]);

  return { launch, countdown, isLoading, error };
};

export default useNextLaunch;
