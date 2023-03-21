import { Request, Response } from "express";
import { IContactUpdate } from "../interfaces/contacts.interface";
import { createContactService } from "../services/contacts/createContacts.service";
import { deleteContactService } from "../services/contacts/deleteContacts.service";
import { retrieveContactsService } from "../services/contacts/retrieveContacts.service";
import { retrieveEspecificContactsService } from "../services/contacts/retrieveEspecificContact.service";
import { updateContactService } from "../services/contacts/updateContacts.service";

export const createContactController = async (req: Request, res: Response) => {
    const userData = req.user
    const contactData = req.body
    const contact = await createContactService(contactData, userData)
    return res.status(201).json(contact);
  };

export const retrieveContactsController = async (req: Request, res: Response) => {
    const userId = req.user.id
    const contacts = await retrieveContactsService(userId)
    return res.status(200).json(contacts);
  };

  export const retrieveEspecificContactController = async (
    req: Request,
    res: Response
  ) => {
    const contactId = req.params.id
    const contact = await retrieveEspecificContactsService(contactId)
    return res.status(200).json(contact);
  };
  export const updateContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const contactData:IContactUpdate = req.body
    const updatedcontact = await updateContactService(contactData, contactId)
    return res.status(200).json(updatedcontact);
  };

  export const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const softDeleted = await deleteContactService(contactId)
    return res.status(204).json(softDeleted);
  };