import { useParams } from "react-router-dom";
import useLaunch from "../hooks/useLaunch";
import DetailView from "../components/DetailView";

const LaunchDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { launch, rocketName, isLoading, error } = useLaunch(id!);

  const statusType = launch?.upcoming ? "upcoming" : launch?.success ? "success" : "failed";
  const statusLabel = launch?.upcoming ? "Upcoming" : launch?.success ? "Successful" : "Failed";

  return (
    <DetailView
      image={launch?.links.patch.large ?? null}
      title={launch?.name ?? ""}
      meta={[
        new Date(launch?.date_utc ?? "").toLocaleDateString(),
        `Rocket: ${rocketName ?? "Unknown"}`,
      ]}
      status={{ label: statusLabel, type: statusType }}
      isLoading={isLoading}
      error={error}
    >
      {launch?.details && <p>{launch.details}</p>}

      {launch?.failures && launch.failures.length > 0 && (
        <div>
          <h3>Failure Details</h3>
          {launch.failures.map((failure, index) => (
            <p key={index}>{failure.reason}</p>
          ))}
        </div>
      )}

      {launch?.links.youtube_id && (
        <a
          href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      )}
    </DetailView>
  );
};

export default LaunchDetailPage;
