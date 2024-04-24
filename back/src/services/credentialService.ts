import { CredentialModel, UserModel } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";
import CredentialDto from "../dtos/CredentialDto";

export async function createCredentials(
  credentialData: CredentialDto
): Promise<Credential> {
  const newCredential: Credential = CredentialModel.create(credentialData);

  await CredentialModel.save(newCredential);

  if (!newCredential) throw new Error("Error al crear las credenciales.");

  return newCredential;
}

export async function verifyCredentials(
  credentialData: CredentialDto
): Promise<User> {
  const { username, password } = credentialData;
  const credential: Credential | null = await CredentialModel.findOneBy({
    username,
    password,
  });

  if (!credential) throw new Error("Usuario y/o contraseña incorrecta.");

  const user = await UserModel.findOneBy({ credentialsId: credential });

  if (!user) throw new Error("No se encontró usuario.");

  return user;
}
