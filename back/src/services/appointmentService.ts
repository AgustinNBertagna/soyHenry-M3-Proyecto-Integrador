import { AppointmentModel, UserModel } from "../config/data-source";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import AppointmentDto from "../dtos/AppointmentDto";

export async function returnAppointments(): Promise<Appointment[]> {
  const appointments: Appointment[] = await AppointmentModel.find();

  if (!appointments) throw new Error("No hay registros de turnos.");

  return appointments;
}

export async function returnAppointment(id: number): Promise<Appointment> {
  const foundAppointment: Appointment | null = await AppointmentModel.findOneBy(
    { id }
  );

  if (!foundAppointment)
    throw new Error(`No se encontró turno con el id: ${id}.`);

  return foundAppointment;
}

export async function createAppointment(data: {
  id: number;
  appointmentData: AppointmentDto;
}): Promise<Appointment> {
  const { id, appointmentData } = data;
  const { date, time, description } = appointmentData;

  const user: User | null = await UserModel.findOneBy({ id });

  if (!user) throw new Error(`No se encontró usuario con el id: ${id}.`);

  const newAppointment: Appointment = AppointmentModel.create({
    date,
    time,
    description,
    userId: user,
    status: "active",
  });
  await AppointmentModel.save(newAppointment);

  if (!newAppointment) throw new Error("Error al crear turno.");

  return newAppointment;
}

export async function cancelAppointment(id: number): Promise<Appointment> {
  const foundAppointment: Appointment | null = await AppointmentModel.findOneBy(
    { id }
  );

  if (!foundAppointment)
    throw new Error(`No se encontró turno con el id: ${id}.`);

  foundAppointment.status = "cancelled";

  const updatedAppointment = await AppointmentModel.save(foundAppointment);

  return updatedAppointment;
}
