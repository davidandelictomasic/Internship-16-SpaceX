import { useSearchParams } from "react-router-dom";
import useShips from "../hooks/useShips";
import ShipCard from "../components/ShipCard";
import styles from "./ShipsPage.module.css";

const ShipsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const { ships, isLoading, error } = useShips(search);

  const handleSearch = (value: string) => {
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

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
      {isLoading && <p>Loading ships...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.grid}>
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </div>
  );
};

export default ShipsPage;
