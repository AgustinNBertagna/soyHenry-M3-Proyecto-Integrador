import { Request, Response } from "express";
import Appointment from "../entities/Appointment";
import AppointmentDto from "../dtos/AppointmentDto";
import {
  cancelAppointment,
  createAppointment,
  returnAppointment,
  returnAppointments,
} from "../services/appointmentService";

export async function getAppointments(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const appointments: Appointment[] = await returnAppointments();

    res.status(200).json([...appointments]);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

export async function getAppointment(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const id = Number(req.params.id);
    const appointment: Appointment = await returnAppointment(id);

    res.status(200).json({ ...appointment });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}

export async function postAppointment(
  req: Request<{ id: number; appointmentData: AppointmentDto }>,
  res: Response
): Promise<void> {
  try {
    const id = Number(req.body.id);
    const appointmentData = req.body.appointmentData;
    await createAppointment({ id, appointmentData });

    res.status(201).json({ message: "Turno creado exitosamente." });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function putAppointment(
  req: Request<{ id: string }>,
  res: Response
): Promise<void> {
  try {
    const id = Number(req.params.id);
    await cancelAppointment(id);

    res.status(200).json({ message: "Turno cancelado exitosamente." });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
}
