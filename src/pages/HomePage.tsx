import useCompany from "../hooks/useCompany";
import withLoading from "../hoc/withLoading";
import styles from "./HomePage.module.css";
import type { Company } from "../types/company";

interface CompanyInfoProps {
  company: Company;
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <div>
      <h1 className={styles.title}>SpaceX Explorer</h1>
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
    </div>
  );
};

const CompanyInfoWithLoading = withLoading(CompanyInfo);

const HomePage = () => {
  const { company, isLoading, error } = useCompany();

  return (
    <CompanyInfoWithLoading
      isLoading={isLoading}
      error={error}
      company={company!}
    />
  );
};

export default HomePage;
