import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
        Home
      </NavLink>
      <NavLink to="/launches" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
        Launches
      </NavLink>
      <NavLink to="/ships" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
        Ships
      </NavLink>
    </nav>
  );
};

export default Navbar;
