import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScheduleInputField from "../../components/InputFields/ScheduleInputField.jsx";
import Button from "../../components/Button/Button.jsx";
import { initialAppointment, formData } from "../../helpers/scheduleData.js";
import {
  handleOnChange,
  handleReset,
  handleSubmit,
} from "../../helpers/scheduleHandlers.js";
import styles from "./Schedule.module.css";

export default function Schedule() {
  const user = useSelector((state) => state.user);
  const [appointmentData, setAppointmentData] = useState(initialAppointment);
  const [errors, setErrors] = useState(initialAppointment);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) navigate("/home");
  }, [user.user]);

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(event, user.user.id, appointmentData, errors, navigate)
      }
      className={styles.formContainer}>
      <h1>¡Reserva tu Turno!</h1>
      {formData.map(({ label, name, type, min, placeholder }, index) => (
        <ScheduleInputField
          key={index}
          label={label}
          name={name}
          type={type}
          min={min}
          value={appointmentData[name]}
          placeholder={placeholder}
          onChange={(event) =>
            handleOnChange(
              event,
              appointmentData,
              setAppointmentData,
              errors,
              setErrors
            )
          }
          error={errors[name]}
        />
      ))}
      <Button
        btnText={"Reservar Turno"}
        disabled={Object.values(errors).some((error) => error !== undefined)}
      />
      <Button
        btnText={"Borrar Turno"}
        onClick={(event) => handleReset(event, setAppointmentData, setErrors)}
      />
    </form>
  );
}
