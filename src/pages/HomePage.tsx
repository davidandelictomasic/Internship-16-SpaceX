import useCompany from "../hooks/useCompany";
import useNextLaunch from "../hooks/useNextLaunch";
import withLoading from "../hoc/withLoading";
import Spinner from "../components/Spinner";
import styles from "./HomePage.module.css";
import type { Company } from "../types/company";

interface CompanyInfoProps {
  company: Company;
}

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
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
  );
};

const CompanyInfoWithLoading = withLoading(CompanyInfo);

const HomePage = () => {
  const { company, isLoading, error } = useCompany();
  const { launch, countdown, isLoading: launchLoading } = useNextLaunch();

  return (
    <div>
      <h1 className={styles.title}>SpaceX Explorer</h1>

      <div className={styles.countdown}>
        <h2 className={styles.sectionTitle}>Next Launch</h2>
        {launchLoading && <Spinner />}
        {launch && countdown && (
          <>
            <p className={styles.launchName}>{launch.name}</p>
            <div className={styles.timer}>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>{countdown.days}</span>
                <span className={styles.timerLabel}>Days</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>{countdown.hours}</span>
                <span className={styles.timerLabel}>Hours</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>{countdown.minutes}</span>
                <span className={styles.timerLabel}>Min</span>
              </div>
              <div className={styles.timerBlock}>
                <span className={styles.timerValue}>{countdown.seconds}</span>
                <span className={styles.timerLabel}>Sec</span>
              </div>
            </div>
          </>
        )}
      </div>

      <CompanyInfoWithLoading
        isLoading={isLoading}
        error={error}
        company={company!}
      />
    </div>
  );
};

export default HomePage;
