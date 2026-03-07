import { Link } from "react-router-dom";
import type { Ship } from "../types/ship";
import styles from "./ShipCard.module.css";

interface ShipCardProps {
  ship: Ship;
}

const ShipCard = ({ ship }: ShipCardProps) => {
  return (
    <Link to={`/ships/${ship.id}`} className={styles.card}>
      {ship.image ? (
        <img src={ship.image} alt={ship.name} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>No Image</div>
      )}
      <div className={styles.body}>
        <h3 className={styles.name}>{ship.name}</h3>
        <p className={styles.type}>{ship.type}</p>
        <span className={`${styles.status} ${ship.active ? styles.active : styles.inactive}`}>
          {ship.active ? "Active" : "Inactive"}
        </span>
      </div>
    </Link>
  );
};

export default ShipCard;
