export const initialCredentials = {
  username: "",
  password: "",
};

export const formData = [
  {
    label: "Nombre de Usuario",
    name: "username",
    type: "text",
    placeholder: "WebDevSeniorMaster",
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    placeholder: "SuperSecretPassword",
  },
];

export const navBtnData = [
  {
    spanTxt: "¿Aún no tienes cuenta?",
    to: "/register",
    btnTxt: "Registrate",
  },
  {
    spanTxt: "Volver a la Pagina Principal",
    to: "/home",
    btnTxt: "HOME",
  },
];
