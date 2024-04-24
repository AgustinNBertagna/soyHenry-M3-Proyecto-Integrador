import { useState } from "react";
import styles from "./Appointment.module.css";

export default function CancelButton({ onClick }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(true);
  const handleHoverOff = () => setHover(false);

  return (
    <button
      className={styles.button}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOff}
      onClick={onClick}>
      {hover ? <h4>Cancelar Turno</h4> : <h4>Pendiente</h4>}
    </button>
  );
}
