export default function validateRegister({
  name,
  username,
  email,
  password,
  confirmPassword,
  birthDate,
  nDni,
}) {
  const nameRegex = /^[a-zA-ZÁÉÍÓÚÑáéíóú\s]+$/;
  const usernameRegex = /^\S+$/;
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
  const nDniRegex = /^[1-9]\d*$/;

  const errors = {};

  if (!nameRegex.test(name))
    errors.name = "No se permiten numeros ni caracteres especiales.";
  if (name === username)
    errors.name = "No puedes usar tu nombre de usuario como nombre.";
  if (!name) errors.name = "Nombre completo requerido.";

  if (!usernameRegex.test(username))
    errors.username = "El nombre de usuario no puede contener espacios.";
  if (username === name)
    errors.username = "No puedes usar tu nombre como nombre de usuario.";
  if (!username) errors.username = "Nombre de usuario requerido.";

  if (!emailRegex.test(email)) errors.email = "Formato de mail invalido.";
  if (!email) errors.email = "Email requerido.";

  if (!passwordRegex.test(password))
    errors.password =
      "La contraseña debe tener como minimo 8 caracteres, una letra minuscula, una letra mayuscula, un numero y un caracter especial.";
  if (!password) errors.password = "Contraseña requerida.";

  if (confirmPassword !== password)
    errors.confirmPassword = "Las contraseñas deben coincidir.";

  if (!confirmPassword)
    errors.confirmPassword = "Confirmar contraseña requerida.";

  if (!dateRegex.test(birthDate))
    errors.birthDate = "Formato de fecha invalido.";
  if (!birthDate) errors.birthDate = "Fecha de nacimiento requerida.";

  const currentDate = new Date();
  const inputBirthDate = new Date(birthDate);

  const legalAgeDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const maxBirthDate = new Date(
    currentDate.getFullYear() - 120,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  if (inputBirthDate > legalAgeDate) {
    errors.birthDate = "Debes ser mayor de 18 años para registrarte.";
  }

  if (inputBirthDate < maxBirthDate) {
    errors.birthDate = "La edad máxima permitida es de 120 años.";
  }

  if (inputBirthDate > currentDate) {
    errors.birthDate = "La fecha de nacimiento no puede ser en el futuro.";
  }

  if (!nDniRegex.test(nDni))
    errors.nDni =
      "El numero de DNI debe ser mayor a 0 y solo contener numeros.";
  if (!nDni) errors.nDni = "Numero de DNI requerido.";

  return errors;
}
