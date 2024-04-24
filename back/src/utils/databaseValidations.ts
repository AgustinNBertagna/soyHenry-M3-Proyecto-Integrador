import {
  AppointmentModel,
  CredentialModel,
  UserModel,
} from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";

export async function databaseUserValidations(
  username: string,
  email: string,
  nDni: string
): Promise<string | undefined> {
  const credential: Credential | null = await CredentialModel.findOneBy({
    username,
  });
  if (credential) return "Ya existe un usuario con ese nombre de usuario.";

  const userByEmail: User | null = await UserModel.findOneBy({ email });
  if (userByEmail) return "Ya existe un usuario con ese email.";

  const userByDni: User | null = await UserModel.findOneBy({ nDni });
  if (userByDni) return "Ya existe un usuario con ese numero de DNI.";
}

export async function databaseAppointmentValidations(
  id: number,
  date: string,
  time: string
): Promise<string | undefined> {
  const user: User | null = await UserModel.findOneBy({ id });

  if (!user) return "No se encontró usuario.";

  const appointment = await AppointmentModel.findOneBy({
    userId: user,
    date,
    time,
  });

  if (appointment)
    return "Ya tienes un turno programado para esa fecha y hora.";
}
