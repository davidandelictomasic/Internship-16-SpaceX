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
