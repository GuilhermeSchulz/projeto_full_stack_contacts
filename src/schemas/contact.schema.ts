import { IContacts, IContactsReturn } from "../interfaces/contacts.interface";
import * as yup from "yup";
import { userWithoutPasswordSerializer } from "./users.schemas";

export const contactSerializer: yup.SchemaOf<IContacts> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
  });


  export const ContactsReturnSerializer: yup.SchemaOf<IContactsReturn> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
  });
export const allContacts = yup.array(ContactsReturnSerializer);
