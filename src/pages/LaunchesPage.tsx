import useLaunches from "../hooks/useLaunches";

const LaunchesPage = () => {
  const { launches, isLoading, error } = useLaunches();

  if (isLoading) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Launches</h1>
      <div>
        {launches.map((launch) => (
          <div key={launch.id}>
            {launch.links.patch.small && (
              <img
                src={launch.links.patch.small}
                alt={launch.name}
                width={80}
              />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchesPage;
