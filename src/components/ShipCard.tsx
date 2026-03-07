import { Link } from "react-router-dom";
import type { Ship } from "../types/ship";

interface ShipCardProps {
  ship: Ship;
}

const ShipCard = ({ ship }: ShipCardProps) => {
  return (
    <Link to={`/ships/${ship.id}`}>
      {ship.image && (
        <img src={ship.image} alt={ship.name} width={200} />
      )}
      <h3>{ship.name}</h3>
      <p>Type: {ship.type}</p>
      <p>{ship.active ? "Active" : "Inactive"}</p>
    </Link>
  );
};

export default ShipCard;
