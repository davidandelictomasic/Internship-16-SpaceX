import { useNavigate } from "react-router-dom";
import type { DetailViewProps } from "../types/detail";
import styles from "./DetailView.module.css";

const DetailView = ({
  image,
  title,
  meta,
  status,
  isLoading,
  error,
  children,
}: DetailViewProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!isLoading && !error && (
        <>
          {image && (
            <img src={image} alt={title} className={styles.image} />
          )}

          <h1 className={styles.title}>{title}</h1>

          {meta.map((item, index) => (
            <p key={index} className={styles.meta}>{item}</p>
          ))}

          <span className={`${styles.status} ${styles[status.type]}`}>
            {status.label}
          </span>

          {children && <div className={styles.children}>{children}</div>}
        </>
      )}
    </div>
  );
};

export default DetailView;
