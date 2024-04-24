import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavButton({ spanTxt, to, btnTxt }) {
  return (
    <div>
      <span>{spanTxt}</span>
      <NavLink to={to}>
        <button className={styles.button}>{btnTxt}</button>
      </NavLink>
    </div>
  );
}
