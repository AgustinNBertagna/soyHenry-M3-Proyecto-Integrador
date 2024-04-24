import { Request, Response, NextFunction } from "express";
import UserDto from "../dtos/UserDto";
import CredentialDto from "../dtos/CredentialDto";
import { userDataValidations } from "../utils/dataValidations";
import { databaseUserValidations } from "../utils/databaseValidations";

export default async function validateRegister(
  req: Request<{ userData: UserDto; credentialsData: CredentialDto }>,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { name, email, birthdate, nDni } = req.body.userData;
  const { username, password } = req.body.credentialsData;

  const dataError = userDataValidations(
    name,
    username,
    email,
    password,
    birthdate,
    nDni
  );

  if (dataError) {
    res.status(400).json({ error: dataError });
    return;
  }

  const dataBaseError = await databaseUserValidations(username, email, nDni);
  if (dataBaseError) {
    res.status(400).json({ error: dataBaseError });
    return;
  }

  next();
}
