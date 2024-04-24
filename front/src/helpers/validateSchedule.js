export default function validateSchedule({ date, time, description }) {
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  let inputDate = new Date(date);
  const actualDate = new Date();
  const saturday = inputDate.toUTCString().includes("Sat");
  const sunday = inputDate.toUTCString().includes("Sun");
  const [hours, minutes] = time.split(":");

  const errors = {};

  if (!dateRegex.test(date)) errors.date = "Formato de fecha invalido.";
  if (saturday || sunday)
    errors.date = "No puedes reservar un turno en fin de semana.";
  if (inputDate < actualDate)
    errors.date = "No puedes reservar un turno en el pasado.";
  if (!date) errors.date = "Fecha requerida.";

  if (time) inputDate = new Date(`${date}T${time}`);
  if (
    errors.date === "No puedes reservar un turno en el pasado." &&
    time &&
    inputDate > actualDate
  )
    errors.date = undefined;

  if (minutes !== "00" && minutes !== "30")
    errors.time = "Solo puedes reservar a las en punto o a las y media.";
  if (!timeRegex.test(time)) errors.time = "Formato de hora invalido.";
  if (!time) errors.time = "Hora requerida.";

  if (!description) errors.description = "Descrípcion requerida.";
  return errors;
}
