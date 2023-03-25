import { User } from "../entities/user.entity";
import { IUserReturn } from "./users.interfaces";


export interface IContactsReturn {
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
  }
export interface IContacts{
  name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate{
  name: string;
  email: string;
  phone: string;
}