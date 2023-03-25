import { IUser, IUserReturn } from "./../interfaces/users.interfaces";
import * as yup from "yup";
import { ContactsReturnSerializer } from "./contact.schema";
export const userSerializer: yup.SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

export const userUpdateSerializer: yup.SchemaOf<IUser> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired(),
  phone: yup.string().notRequired(),
});
export const userWithoutPasswordSerializer: yup.SchemaOf<IUserReturn> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    contacts: yup.array(ContactsReturnSerializer).notRequired(),
  });
export const allUsersWithoutPassword = yup.array(userWithoutPasswordSerializer);
