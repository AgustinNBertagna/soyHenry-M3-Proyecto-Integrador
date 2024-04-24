export function userDataValidations(
  name: string,
  username: string,
  email: string,
  password: string,
  birthdate: string,
  nDni: string
): string | undefined {
  const nameRegex = /^[a-zA-ZÁÉÍÓÚÑáéíóú\s]+$/;
  const usernameRegex = /^\S+$/;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  const nDniRegex = /^[1-9]\d*$/;

  const actualDate = new Date();
  const birthDate = new Date(birthdate);
  const legalAge = new Date(
    actualDate.getFullYear() - 18,
    actualDate.getMonth(),
    actualDate.getDate()
  );
  const maxAge = new Date(
    actualDate.getFullYear() - 120,
    actualDate.getMonth(),
    actualDate.getDate()
  );

  if (!name || !username || !email || !password || !birthdate || !nDni)
    return "Datos insuficientes para crear usuario.";

  if (!nameRegex.test(name)) return "Nombre no válido.";
  if (!usernameRegex.test(username)) return "Nombre de usuario no válido.";
  if (!emailRegex.test(email)) return "Email no válido.";
  if (!passwordRegex.test(password)) return "Contraseña no válida.";
  if (!dateRegex.test(birthdate)) return "Fecha de nacimiento no válida.";
  if (!nDniRegex.test(nDni)) return "DNI no válido.";

  if (name === username)
    return "El nombre completo y el nombre de usuario no pueden coincidir.";

  if (birthDate > actualDate)
    return "La fecha de nacimiento no puede ser en el futuro.";
  if (birthDate > legalAge)
    return "Debes ser mayor de 18 años para registrarte.";
  if (birthDate < maxAge) return "La edad máxima permitida es de 120 años.";
}

export function scheduleDataValidations(
  date: string,
  time: string,
  description: string
): string | undefined {
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  const actualDate = new Date();
  const inputDate = new Date(`${date}T${time}`);
  inputDate.setSeconds(actualDate.getSeconds());
  const saturday = inputDate.toUTCString().includes("Sat");
  const sunday = inputDate.toUTCString().includes("Sun");
  const [hours, minutes] = time.split(":");

  if (!date || !time || !description)
    return "Datos insuficientes para crear un turno.";

  if (!dateRegex.test(date)) return "Formato de fecha no válida.";
  if (!timeRegex.test(time)) return "Formato de hora no válida.";

  if (saturday || sunday)
    return "No puedes reservar un turno en fin de semana.";

  if (Number(inputDate) < Number(actualDate))
    return "No puedes reservar un turno en el pasado.";

  if (minutes !== "00" && minutes !== "30")
    return "Solo puedes reservar a las en punto o a las y media.";
}
