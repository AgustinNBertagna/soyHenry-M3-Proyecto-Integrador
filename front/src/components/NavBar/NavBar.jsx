import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import NavItem from "./NavItem.jsx";
import Button from "../Button/Button.jsx";
import {
  initialState,
  setUserData,
  setUserAppointments,
} from "../../redux/userSlice";
import logo from "../../assets/logo-app.png";
import userImg from "../../assets/user.png";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    if (window.confirm("¿Estas seguro de que quieres cerrar sesión?")) {
      dispatch(setUserAppointments(initialState.userAppointments));
      dispatch(setUserData(initialState.user));
      navigate("/");
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navItemsContainer}>
        {!user.login && <NavItem to="/" toText="IDENTIFICACIÓN" />}
        <NavItem to="/home" toText="HOME" />
        {user.login && <NavItem to="/appointments" toText="MIS TURNOS" />}
        {user.login && <NavItem to="/schedule" toText="RESERVAR TURNO" />}
        {user.login && (
          <Button btnText={"CERRAR SESION"} onClick={handleLogout} />
        )}
        <NavItem to="/about" toText="ABOUT" />
        <NavItem to="/contact" toText="CONTACT" />
      </div>
      <div className={styles.userContainer}>
        <NavLink to="/">
          <img src={userImg} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
