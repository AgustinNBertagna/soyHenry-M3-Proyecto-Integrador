import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.login) navigate("/home");
  }, [user.user]);

  return (
    <div className={styles.landingContainer}>
      <h1>¡Bienvenido a Tu Turnero Online!</h1>
      <h2>¿Nuevo Aquí?</h2>
      <NavLink to="/register">
        <button>¡Regístrate!</button>
      </NavLink>
      <h2>¿Ya tienes una cuenta?</h2>
      <NavLink to="/login">
        <button>¡Inicia Sesión!</button>
      </NavLink>
    </div>
  );
}
