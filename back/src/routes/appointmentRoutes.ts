import { Router } from "express";
import {
  getAppointment,
  getAppointments,
  postAppointment,
  putAppointment,
} from "../controllers/appointmentController";
import validateSchedule from "../middlewares/validateSchedule";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointment);
appointmentRouter.post("/schedule", validateSchedule, postAppointment);
appointmentRouter.put("/cancel/:id", putAppointment);

export default appointmentRouter;
