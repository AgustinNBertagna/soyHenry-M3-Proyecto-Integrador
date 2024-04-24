import { Request, Response, NextFunction } from "express";
import AppointmentDto from "../dtos/AppointmentDto";
import { scheduleDataValidations } from "../utils/dataValidations";
import { databaseAppointmentValidations } from "../utils/databaseValidations";

export default async function validateSchedule(
  req: Request<{ id: number; appointmentData: AppointmentDto }>,
  res: Response,
  next: NextFunction
) {
  const { id, appointmentData } = req.body;
  const { date, time, description } = appointmentData;

  const dataError = scheduleDataValidations(date, time, description);
  if (dataError) {
    res.status(400).json({ error: dataError });
    return;
  }

  const dataBaseError = await databaseAppointmentValidations(id, date, time);
  if (dataBaseError) {
    res.status(400).json({ error: dataBaseError });
    return;
  }

  next();
}
