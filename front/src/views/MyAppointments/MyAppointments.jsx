import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserAppointments } from "../../redux/userSlice.js";
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList.jsx";
import NavButton from "../../components/NavButton/NavButton.jsx";
import { sortAppointments } from "../../helpers/formatters.js";
import styles from "./MyAppointments.module.css";

export default function MyAppointments() {
  const user = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.userAppointments);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.login) navigate("/home");
    else {
      const URL = `http://localhost:3000/users/${user.user.id}`;
      axios
        .get(URL)
        .then((res) =>
          dispatch(setUserAppointments(sortAppointments(res.data.appointments)))
        );
    }
  }, [user.user]);

  return (
    <div className={styles.appointmentsContainer}>
      <h3>¡Mis Turnos!</h3>
      {appointments.length === 0 ? (
        <NavButton
          spanTxt={"¡No tienes turnos pendientes!"}
          to={"/schedule"}
          btnTxt={"¡RESERVA UN TURNO!"}
        />
      ) : (
        <AppointmentsList
          userId={user.user.id}
          appointments={appointments}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
