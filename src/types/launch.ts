export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  date_unix: number;
  flight_number: number;
  success: boolean | null;
  upcoming: boolean;
  details: string | null;
  rocket: string;
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    webcast: string | null;
    youtube_id: string | null;
  };
  failures: {
    time: number;
    altitude: number | null;
    reason: string;
  }[];
}

export interface LaunchesResponse {
  docs: Launch[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface UseLaunchResult {
  launch: Launch | null;
  rocketName: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface UseNextLaunchResult {
  launch: Launch | null;
  countdown: CountdownTime | null;
  isLoading: boolean;
  error: string | null;
}
