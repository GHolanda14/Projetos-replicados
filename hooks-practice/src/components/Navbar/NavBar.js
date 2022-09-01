import styles from "./NavBar.module.css";
import logo from "../../resources/logo.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <img src={logo} />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">LINK 2</NavLink>
        </li>
        <li>
          <NavLink to="/">LINK 3</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
