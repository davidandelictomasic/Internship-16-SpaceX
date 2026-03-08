import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          Home
        </NavLink>
        <NavLink to="/launches" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          Launches
        </NavLink>
        <NavLink to="/ships" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
          Ships
        </NavLink>
      </div>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
};

export default Navbar;
