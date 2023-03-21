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
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

export const userRoutes = Router();

userRoutes.post("", verifyDataMiddleware(userSerializer),createUserController);
userRoutes.get("",verifyTokenMiddleware,verifyUser, retrieveUsersController);
userRoutes.get("/:id",verifyTokenMiddleware,verifyUser, retrieveEspecificUserController);
userRoutes.patch("/:id",verifyTokenMiddleware,verifyUser, updateUserController);
userRoutes.delete("/:id",verifyTokenMiddleware,verifyUser, deleteUserController);