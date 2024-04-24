import "reflect-metadata";
import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => console.log("Conexión exitosa. a la Base de Datos"))
  .then(() =>
    server.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto:${PORT}`)
    )
  );
