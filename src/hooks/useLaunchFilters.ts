import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useLaunchFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const search = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "all";

  const handleSearch = (value: string) => {
    setPage(1);
    const params: Record<string, string> = {};
    if (value) params.search = value;
    if (filter !== "all") params.filter = filter;
    setSearchParams(params);
  };

  const handleFilter = (value: string) => {
    setPage(1);
    const params: Record<string, string> = {};
    if (search) params.search = search;
    if (value !== "all") params.filter = value;
    setSearchParams(params);
  };

  return { search, filter, page, setPage, handleSearch, handleFilter };
};

export default useLaunchFilters;
