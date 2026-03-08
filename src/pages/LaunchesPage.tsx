import useLaunches from "../hooks/useLaunches";
import useLaunchFilters from "../hooks/useLaunchFilters";
import LaunchCard from "../components/LaunchCard";
import Spinner from "../components/Spinner";
import styles from "./LaunchesPage.module.css";

const LaunchesPage = () => {
  const { search, filter, page, setPage, handleSearch, handleFilter } =
    useLaunchFilters();
  const { launches, isLoading, error, totalPages, hasNextPage, hasPrevPage } =
    useLaunches(page, search, filter === "all" ? "" : filter);

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
      <select
        className={styles.filterSelect}
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="successful">Successful</option>
        <option value="failed">Failed</option>
        <option value="upcoming">Upcoming</option>
      </select>
      {isLoading && <Spinner />}
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
