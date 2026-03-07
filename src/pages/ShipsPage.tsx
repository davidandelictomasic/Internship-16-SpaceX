import useShips from "../hooks/useShips";
import ShipCard from "../components/ShipCard";

const ShipsPage = () => {
  const { ships, isLoading, error } = useShips();

  return (
    <div>
      <h1>Ships</h1>
      {isLoading && <p>Loading ships...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </div>
  );
};

export default ShipsPage;
