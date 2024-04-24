import { Router } from "express";
import {
  getUser,
  getUsers,
  postUserLogin,
  postUserRegister,
} from "../controllers/userController";
import validateRegister from "../middlewares/validateRegister";

const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", validateRegister, postUserRegister);
userRouter.post("/login", postUserLogin);

export default userRouter;
