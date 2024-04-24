import axios from "axios";
import validateSchedule from "./validateSchedule";
import { initialAppointment } from "./scheduleData";

export const handleOnChange = (
  event,
  appointmentData,
  setAppointmentData,
  errors,
  setErrors
) => {
  const { name, value } = event.target;

  setAppointmentData({
    ...appointmentData,
    [name]: value,
  });

  const appointmentErrors = validateSchedule({
    ...appointmentData,
    [name]: value,
  });

  setErrors({
    ...errors,
    date: appointmentErrors.date,
    time: appointmentErrors.time,
    [name]: appointmentErrors[name],
  });
};

export const handleReset = (event, setAppointmentData, setErrors) => {
  event.preventDefault();
  setAppointmentData(initialAppointment);
  setErrors(initialAppointment);
};

export const handleSubmit = async (
  event,
  id,
  appointmentData,
  errors,
  navigate
) => {
  const URL = "http://localhost:3000/appointments/schedule/";
  const emptyFields = Object.values(appointmentData).some(
    (appointment) => appointment === ""
  );
  const errorFields = Object.values(errors).some(
    (error) => error !== undefined
  );
  event.preventDefault();
  if (emptyFields) alert("Faltan campos.");
  else if (errorFields) alert("Algunos campos tienen errores.");
  else {
    const appointment = {
      id,
      appointmentData: {
        date: appointmentData.date,
        time: appointmentData.time,
        description: appointmentData.description,
      },
    };
    try {
      const response = await axios.post(URL, appointment);
      alert(response.data.message);
      setTimeout(() => {
        navigate("/appointments");
      }, 1000);
    } catch (error) {
      alert(error.response.data.error);
    }
  }
};
