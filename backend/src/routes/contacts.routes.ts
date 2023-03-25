
import { Router } from "express";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { verifyUser } from "../middlewares/verifyUser.middleware";
import { createContactController, deleteContactController, retrieveContactsController, retrieveEspecificContactController, updateContactController } from "../controllers/contact.controller";
import { contactSerializer } from "../schemas/contact.schema";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

export const contactsRoutes = Router();

contactsRoutes.post("", verifyDataMiddleware(contactSerializer),verifyTokenMiddleware,verifyUser, createContactController);
contactsRoutes.get("",verifyTokenMiddleware,verifyUser, retrieveContactsController);
contactsRoutes.get("/:id",verifyTokenMiddleware,verifyUser, retrieveEspecificContactController);
contactsRoutes.patch("/:id",verifyTokenMiddleware,verifyUser, updateContactController);
contactsRoutes.delete("/:id",verifyTokenMiddleware,verifyUser, deleteContactController);
