import { useState } from "react";
import useLaunches from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";

const LaunchesPage = () => {
  const [page, setPage] = useState(1);
  const { launches, isLoading, error, totalPages, hasNextPage, hasPrevPage } =
    useLaunches(page);

  if (isLoading) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Launches</h1>
      <div>
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      <div>
        <button disabled={!hasPrevPage} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span>
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
