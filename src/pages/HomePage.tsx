import useCompany from "../hooks/useCompany";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { company, isLoading, error } = useCompany();

  return (
    <div>
      <h1 className={styles.title}>SpaceX Explorer</h1>

      {isLoading && <p>Loading company info...</p>}
      {error && <p>Error: {error}</p>}

      {company && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About {company.name}</h2>
          <p className={styles.summary}>{company.summary}</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p className={styles.statValue}>{company.founder}</p>
              <p className={styles.statLabel}>Founder</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{company.employees.toLocaleString()}</p>
              <p className={styles.statLabel}>Employees</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{company.vehicles}</p>
              <p className={styles.statLabel}>Vehicles</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{company.launch_sites}</p>
              <p className={styles.statLabel}>Launch Sites</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
