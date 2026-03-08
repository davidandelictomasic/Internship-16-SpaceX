import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useShips from "../hooks/useShips";
import ShipCard from "../components/ShipCard";
import styles from "./ShipsPage.module.css";

const ShipsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { ships, isLoading, error, hasNextPage, loadMore } = useShips(search);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const bottom = bottomRef.current;
    if (!bottom) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(bottom);

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div>
      <h1 className={styles.title}>Ships</h1>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search ships..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {error && <p>Error: {error}</p>}
      <div className={styles.grid}>
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
      {isLoading && <p>Loading ships...</p>}
      {hasNextPage && <div ref={bottomRef} />}
    </div>
  );
};

export default ShipsPage;
