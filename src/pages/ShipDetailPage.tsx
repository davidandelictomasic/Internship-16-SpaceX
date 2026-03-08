import { useParams } from "react-router-dom";
import useShip from "../hooks/useShip";
import DetailView from "../components/DetailView";

const ShipDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { ship, isLoading, error } = useShip(id!);

  const meta = [
    `Type: ${ship?.type ?? ""}`,
    ...(ship?.home_port ? [`Home Port: ${ship.home_port}`] : []),
    ...(ship?.year_built ? [`Year Built: ${ship.year_built}`] : []),
  ];

  return (
    <DetailView
      image={ship?.image ?? null}
      title={ship?.name ?? ""}
      meta={meta}
      status={{
        label: ship?.active ? "Active" : "Inactive",
        type: ship?.active ? "active" : "inactive",
      }}
      isLoading={isLoading}
      error={error}
    >
      {ship?.roles && ship.roles.length > 0 && (
        <div>
          <h3>Roles</h3>
          {ship.roles.map((role) => (
            <span key={role}>{role} </span>
          ))}
        </div>
      )}

      {ship?.link && (
        <a href={ship.link} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      )}
    </DetailView>
  );
};

export default ShipDetailPage;
