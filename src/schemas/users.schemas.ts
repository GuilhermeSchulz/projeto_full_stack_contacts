import { IUser, IUserReturn } from "./../interfaces/users.interfaces";
import * as yup from "yup";

export const userSerializer: yup.SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

export const userWithoutPasswordSerializer: yup.SchemaOf<IUserReturn> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date().notRequired()
  });
export const allUsersWithoutPassword = yup.array(userWithoutPasswordSerializer);
