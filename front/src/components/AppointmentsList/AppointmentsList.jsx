import Appointment from "../Appointment/Appointment.jsx";
import styles from "./AppointmentsList.module.css";

export default function AppointmentsList({ userId, appointments, dispatch }) {
  return (
    <div className={styles.cardsContainer}>
      {appointments.map(({ id, date, time, description, status }) => (
        <Appointment
          key={id}
          userId={userId}
          id={id}
          date={date}
          time={time}
          description={description}
          status={status}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
