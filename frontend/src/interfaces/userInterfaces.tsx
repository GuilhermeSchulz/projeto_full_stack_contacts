import { FieldValues } from "react-hook-form";

export interface IUser {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}
export interface IUserReturn {
    name: string;
    email: string;
    phone: string;
}

export interface IUserContext {
    user: IUserReturn | null;
    setUser: React.Dispatch<React.SetStateAction<IUserReturn | null>>;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmitSignUp: (data: FieldValues) => void;
    onSubmitLogin: (data: FieldValues) => void;
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}