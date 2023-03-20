
import { Router } from "express";
import { verifyDataMiddleware } from "../middlewares/verifyData.middleware";
import { verifyUser } from "../middlewares/verifyUser.middleware";
import { createContactController, deleteContactController, retrieveContactsController, retrieveEspecificContactController, updateContactController } from "../controllers/contact.controller";
import { contactSerializer } from "../schemas/contact.schema";

export const contactsRoutes = Router();

contactsRoutes.post("", verifyDataMiddleware(contactSerializer),createContactController);
contactsRoutes.get("",verifyUser, retrieveContactsController);
contactsRoutes.get("/:id",verifyUser, retrieveEspecificContactController);
contactsRoutes.patch("/:id",verifyUser, updateContactController);
contactsRoutes.delete("/:id",verifyUser, deleteContactController);
