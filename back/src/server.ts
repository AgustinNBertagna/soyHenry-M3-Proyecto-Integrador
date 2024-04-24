import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/userRoutes";
import appointmentRouter from "./routes/appointmentRoutes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/users", userRouter);
server.use("/appointments", appointmentRouter);

export default server;
