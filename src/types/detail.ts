import type { ReactNode } from "react";

export interface DetailViewProps {
  image: string | null;
  title: string;
  meta: string[];
  status: {
    label: string;
    type: "success" | "failed" | "upcoming" | "active" | "inactive";
  };
  isLoading: boolean;
  error: string | null;
  children?: ReactNode;
}
