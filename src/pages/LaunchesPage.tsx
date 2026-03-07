import { useState } from "react";
import useLaunches from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";
import styles from "./LaunchesPage.module.css";

const LaunchesPage = () => {
  const [page, setPage] = useState(1);
  const { launches, isLoading, error, totalPages, hasNextPage, hasPrevPage } =
    useLaunches(page);

  return (
    <div>
      <h1 className={styles.title}>Launches</h1>
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
