import { UserModel } from "../config/data-source";
import User from "../entities/User";
import Credential from "../entities/Credential";
import UserDto from "../dtos/UserDto";
import CredentialDto from "../dtos/CredentialDto";
import { createCredentials } from "./credentialService";

export async function returnUsers(): Promise<User[]> {
  const users: User[] = await UserModel.find();

  if (users.length === 0) throw new Error("No se encontraron usuarios.");

  return users;
}

export async function returnUser(id: number): Promise<User> {
  const foundUser: User | null = await UserModel.findOne({
    where: {
      id,
    },
    relations: {
      appointments: true,
    },
  });

  if (!foundUser) throw new Error(`No se encontró usuario con el id: ${id}.`);

  return foundUser;
}

export async function createUser(data: {
  userData: UserDto;
  credentialsData: CredentialDto;
}): Promise<User> {
  const { userData, credentialsData } = data;
  const { name, email, birthdate, nDni } = userData;
  const { username, password } = credentialsData;

  const newCredential: Credential = await createCredentials({
    username,
    password,
  });

  if (!newCredential) throw new Error("Error al crear las credenciales.");

  const newUser: User = UserModel.create({
    name,
    email,
    birthdate,
    nDni,
    credentialsId: newCredential,
  });
  await UserModel.save(newUser);

  if (!newUser) throw new Error("Error al crear el usuario.");

  return newUser;
}
