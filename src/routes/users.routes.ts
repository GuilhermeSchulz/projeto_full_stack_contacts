import {
  createUserController,
  retrieveUsersController,
  retrieveEspecificUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";
import { Router } from "express";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { userSerializer } from "../schemas/users.schemas";
import { verifyUser } from "../middlewares/verifyUser.middleware";

export const userRoutes = Router();

userRoutes.post("", verifyDataMiddleware(userSerializer),createUserController);
userRoutes.get("",verifyUser, retrieveUsersController);
userRoutes.get("/:id",verifyUser, retrieveEspecificUserController);
userRoutes.patch("/:id",verifyUser, updateUserController);
userRoutes.delete("/:id",verifyUser, deleteUserController);
