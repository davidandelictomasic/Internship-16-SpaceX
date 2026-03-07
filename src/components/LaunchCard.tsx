import { Link } from "react-router-dom";
import type { Launch } from "../types/launch";

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard = ({ launch }: LaunchCardProps) => {
  return (
    <Link to={`/launches/${launch.id}`}>
      {launch.links.patch.small && (
        <img src={launch.links.patch.small} alt={launch.name} width={80} />
      )}
      <h3>{launch.name}</h3>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>
        {launch.upcoming
          ? "Upcoming"
          : launch.success
            ? "Successful"
            : "Failed"}
      </p>
    </Link>
  );
};

export default LaunchCard;
