import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useLaunches from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";
import styles from "./LaunchesPage.module.css";

const LaunchesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [page, setPage] = useState(1);
  const { launches, isLoading, error, totalPages, hasNextPage, hasPrevPage } =
    useLaunches(page, search);

  const handleSearch = (value: string) => {
    setPage(1);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Launches</h1>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search launches..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {isLoading && <p>Loading launches...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.list}>
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button disabled={!hasPrevPage} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span className={styles.pageInfo}>
          Page {page} of {totalPages}
        </span>
        <button disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LaunchesPage;
