import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavItem({ to, toText }) {
  return (
    <NavLink to={to} className={styles.navItem}>
      <button>{toText}</button>
    </NavLink>
  );
}
