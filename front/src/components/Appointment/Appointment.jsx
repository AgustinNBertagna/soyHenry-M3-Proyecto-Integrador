import CancelButton from "./CancelButton.jsx";
import { formatDate } from "../../helpers/formatters.js";
import { handleCancelAppointment } from "../../helpers/myAppointmentsHandlers.js";
import styles from "./Appointment.module.css";

export default function Appointment({
  userId,
  id,
  date,
  time,
  description,
  status,
  dispatch,
}) {
  return (
    <div className={styles.card}>
      <h4>{formatDate(date)}</h4>
      <h4>{time}</h4>
      <h4>{description}</h4>
      {status === "active" ? (
        <CancelButton
          onClick={(event) =>
            handleCancelAppointment(event, userId, id, date, time, dispatch)
          }
        />
      ) : (
        <button className={styles.cancelledBtn} disabled={true}>
          <h4>TURNO CANCELADO</h4>
        </button>
      )}
    </div>
  );
}
