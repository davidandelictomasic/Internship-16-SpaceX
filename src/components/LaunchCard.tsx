import { Link } from "react-router-dom";
import type { Launch } from "../types/launch";
import styles from "./LaunchCard.module.css";

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard = ({ launch }: LaunchCardProps) => {
  const statusText = launch.upcoming ? "Upcoming" : launch.success ? "Successful" : "Failed";
  const statusClass = launch.upcoming ? styles.upcoming : launch.success ? styles.success : styles.failed;

  return (
    <Link to={`/launches/${launch.id}`} className={styles.card}>
      {launch.links.patch.small && (
        <img src={launch.links.patch.small} alt={launch.name} className={styles.patch} />
      )}
      <div className={styles.info}>
        <h3 className={styles.name}>{launch.name}</h3>
        <p className={styles.date}>{new Date(launch.date_utc).toLocaleDateString()}</p>
      </div>
      <span className={`${styles.status} ${statusClass}`}>{statusText}</span>
    </Link>
  );
};

export default LaunchCard;
