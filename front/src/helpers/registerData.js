export const initialUserData = {
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: "",
  nDni: "",
};

export const formData = [
  {
    label: "Nombre Completo",
    name: "name",
    type: "text",
    placeholder: "Agustín N. Bertagna",
  },
  {
    label: "Nombre de Usuario",
    name: "username",
    type: "text",
    placeholder: "SuperWebDev",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "mymail@mail.com",
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    placeholder: "superSecretPassword",
  },
  {
    label: "Confirmar Contraseña",
    name: "confirmPassword",
    type: "password",
    placeholder: "",
  },
  {
    label: "Fecha de Nacimiento",
    name: "birthDate",
    type: "date",
    placeholder: "13/02/2002",
  },
  {
    label: "Numero de DNI",
    name: "nDni",
    type: "text",
    placeholder: "25450982",
  },
];

export const navBtnData = [
  {
    spanTxt: "¿Ya tienes cuenta?",
    to: "/login",
    btnTxt: "Inicia Sesión",
  },
  {
    spanTxt: "Volver a la Pagina Principal",
    to: "/home",
    btnTxt: "HOME",
  },
];
