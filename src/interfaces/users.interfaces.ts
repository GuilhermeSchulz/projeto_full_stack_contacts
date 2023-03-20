export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}
export interface IUserReturn {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}
export interface IUserUpdate {
  name: string;
  email: string;
  phone: string;
  password: string;
}
