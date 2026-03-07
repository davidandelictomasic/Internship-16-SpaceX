import { useParams } from "react-router-dom";
import useLaunch from "../hooks/useLaunch";
import styles from "./LaunchDetailPage.module.css";

const LaunchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { launch, rocketName, isLoading, error } = useLaunch(id!);

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading launch...</p>}
      {error && <p>Error: {error}</p>}
      {launch && (
        <>
          {launch.links.patch.large && (
            <img
              src={launch.links.patch.large}
              alt={launch.name}
              className={styles.patch}
            />
          )}

          <h1 className={styles.name}>{launch.name}</h1>
          <p className={styles.meta}>{new Date(launch.date_utc).toLocaleDateString()}</p>
          <p className={styles.meta}>Rocket: {rocketName ?? "Unknown"}</p>
          <p className={styles.status}>
            Status:{" "}
            {launch.upcoming
              ? "Upcoming"
              : launch.success
                ? "Successful"
                : "Failed"}
          </p>

          {launch.details && <p className={styles.details}>{launch.details}</p>}

          {launch.failures.length > 0 && (
            <div className={styles.failureSection}>
              <h3 className={styles.failureTitle}>Failure Details</h3>
              {launch.failures.map((failure, index) => (
                <p key={index} className={styles.failureReason}>{failure.reason}</p>
              ))}
            </div>
          )}

          {launch.links.youtube_id && (
            <a
              href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtubeLink}
            >
              Watch on YouTube
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default LaunchDetailPage;
