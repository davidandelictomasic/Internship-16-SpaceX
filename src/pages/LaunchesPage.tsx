import useLaunches from "../hooks/useLaunches";
import LaunchCard from "../components/LaunchCard";

const LaunchesPage = () => {
  const { launches, isLoading, error } = useLaunches();

  if (isLoading) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Launches</h1>
      <div>
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchesPage;
