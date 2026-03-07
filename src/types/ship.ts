export interface Ship {
  id: string;
  name: string;
  type: string;
  active: boolean;
  image: string | null;
  roles: string[];
  home_port: string | null;
  year_built: number | null;
  link: string | null;
}

export interface ShipsResponse {
  docs: Ship[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
