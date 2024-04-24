import { Request, Response } from "express";
import { createUser, returnUser, returnUsers } from "../services/userService";
import { verifyCredentials } from "../services/credentialService";
import User from "../entities/User";
import UserDto from "../dtos/UserDto";
import CredentialDto from "../dtos/CredentialDto";

export async function getUsers(req: Request, res: Response): Promise<void> {
  try {
    const users: User[] = await returnUsers();

    res.status(200).json([...users]);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

export async function getUser(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const id = Number(req.params.id);
    const user: User = await returnUser(id);

    res.status(200).json({ ...user });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

export async function postUserRegister(
  req: Request<{ userData: UserDto; credentialsData: CredentialDto }>,
  res: Response
): Promise<void> {
  try {
    const { userData, credentialsData } = req.body;

    await createUser({ userData, credentialsData });

    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function postUserLogin(
  req: Request<{ credentialsData: CredentialDto }>,
  res: Response
): Promise<void> {
  try {
    const { username, password } = req.body.credentialsData;
    const user: User = await verifyCredentials({ username, password });

    res.status(200).json({ login: true, user });
  } catch (error: any) {
    res.status(400).json({ login: false, error: error.message });
  }
}
