import axios from "axios";
import { setUserAppointments } from "../redux/userSlice";
import { formatDate, sortAppointments } from "./formatters.js";

export const handleCancelAppointment = async (
  event,
  userId,
  id,
  date,
  time,
  dispatch
) => {
  const URL = "http://localhost:3000/appointments/cancel/";
  event.preventDefault();
  const actualDate = new Date();
  const appointmentDate = new Date(`${date}T${time}`);
  if (appointmentDate - actualDate <= 86400000)
    alert("Solo puedes cancelar el turno hasta un dia antes de que concurra.");
  else if (
    window.confirm(
      `¿Esta seguro de querer cancelar su turno del dia ${formatDate(
        date
      )} a la hora ${time}?`
    )
  ) {
    try {
      const res1 = await axios.put(URL + id);
      const res2 = await axios.get(`http://localhost:3000/users/${userId}`);
      dispatch(setUserAppointments(sortAppointments(res2.data.appointments)));
      alert(res1.data.message);
    } catch (error) {
      alert("Error al cancelar el turno.");
    }
  }
};
