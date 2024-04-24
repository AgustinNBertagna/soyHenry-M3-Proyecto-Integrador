import typescript from "../assets/typescript.svg";
import express from "../assets/express.svg";
import postgres from "../assets/postgreSQL.svg";
import typeorm from "../assets/typeorm.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import reactRouter from "../assets/react-router.svg";
import redux from "../assets/redux.svg";

export const backData = [
  {
    title: "TypeScript",
    img: typescript,
    desc: "TypeScript me permitió una estructura sólida y un manejo de errores eficiente para el BackEnd de mi Proyecto.",
  },
  {
    title: "ExpressJS",
    img: express,
    desc: "Express facilitó la creacion de endpoints, manejo de rutas, middlewares y controladores de mi Modelo MVC.",
  },
  {
    title: "PostgreSQL",
    img: postgres,
    desc: "PostgreSQL es la base de datos utilizada para almacenar la información de los usuarios y turnos del proyecto.",
  },
  {
    title: "TypeORM",
    img: typeorm,
    desc: "Empleé TypeORM para el manejo del CRUD, y consultas a la base de datos del proyecto.",
  },
];

export const frontData = [
  {
    title: "JavaScript",
    img: javascript,
    desc: "Utilice JavaScript para la validación de formularios, formateadores y mapeo de informacion de mi FrontEnd.",
  },
  {
    title: "React",
    img: react,
    desc: "React fue la librería designada para el desarrollo FrontEnd del proyecto.",
  },
  {
    title: "React Router",
    img: reactRouter,
    desc: "React Router se encargó de la logica relacionada con las views del SPA del proyecto.",
  },
  {
    title: "Redux",
    img: redux,
    desc: "Redux jugó un papel importante en el manejo de la informacion global, como la sesion de usuario y sus turnos.",
  },
];
