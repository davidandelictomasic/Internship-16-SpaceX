import useShips from "../hooks/useShips";
import ShipCard from "../components/ShipCard";
import styles from "./ShipsPage.module.css";

const ShipsPage = () => {
  const { ships, isLoading, error } = useShips();

  return (
    <div>
      <h1 className={styles.title}>Ships</h1>
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
