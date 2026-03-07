import { useParams } from "react-router-dom";
import useLaunch from "../hooks/useLaunch";

const LaunchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { launch, rocketName, isLoading, error } = useLaunch(id!);

  if (isLoading) return <p>Loading launch...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!launch) return <p>Launch not found</p>;

  return (
    <div>
      {launch.links.patch.large && (
        <img
          src={launch.links.patch.large}
          alt={launch.name}
          width={200}
        />
      )}

      <h1>{launch.name}</h1>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
      <p>Rocket: {rocketName ?? "Unknown"}</p>
      <p>
        Status:{" "}
        {launch.upcoming
          ? "Upcoming"
          : launch.success
            ? "Successful"
            : "Failed"}
      </p>

      {launch.details && <p>{launch.details}</p>}

      {launch.failures.length > 0 && (
        <div>
          <h3>Failure Details</h3>
          {launch.failures.map((failure, index) => (
            <p key={index}>{failure.reason}</p>
          ))}
        </div>
      )}

      {launch.links.youtube_id && (
        <a
          href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default LaunchDetailPage;
