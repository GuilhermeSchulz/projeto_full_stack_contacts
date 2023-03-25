import {
  createUserController,
  retrieveUsersController,
  retrieveEspecificUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";
import { Router } from "express";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { userSerializer, userUpdateSerializer } from "../schemas/users.schemas";
import { verifyUser } from "../middlewares/verifyUser.middleware";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

export const userRoutes = Router();

userRoutes.post("", verifyDataMiddleware(userSerializer), createUserController);
userRoutes.get(
  "",
  verifyTokenMiddleware,
  verifyUser,
  retrieveEspecificUserController
);
userRoutes.patch(
  "/:id",
  verifyDataMiddleware(userUpdateSerializer),
  verifyTokenMiddleware,
  verifyUser,
  updateUserController
);
userRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyUser,
  deleteUserController
);
