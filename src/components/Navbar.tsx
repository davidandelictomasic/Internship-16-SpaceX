import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/launches">Launches</NavLink>
      <NavLink to="/ships">Ships</NavLink>
    </nav>
  );
};

export default Navbar;
