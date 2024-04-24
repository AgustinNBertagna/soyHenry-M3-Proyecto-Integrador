import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      navigate("/home");
      setTimer(5);
    }
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <div className={styles.errorContainer}>
      <h1>
        Oops! No se supone que estes aqui... Redirigiendo a Home en: {timer}
      </h1>
    </div>
  );
}
