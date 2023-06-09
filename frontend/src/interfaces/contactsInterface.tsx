import { FieldValues } from "react-hook-form";

export interface IContacts {
    name: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface IContactReturn {
    name: string;
    email: string;
    phone: string;
    avatar: string;
    id: string;
}

export interface IContactContext {
    contacts: IContactReturn[];
    onSubmitContact: (data: FieldValues) => void;
    onDeleteContact: (id: string) => void;
    onUpdateContact: (id: string, data: FieldValues) => void;
    setContacts: React.Dispatch<React.SetStateAction<IContactReturn[] | []>>;
    addContact: boolean;
    setAddContact: React.Dispatch<React.SetStateAction<boolean>>;
    updateContact: boolean;
    setUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
    contact: IContactReturn | null;
    setContact: React.Dispatch<React.SetStateAction<IContactReturn | null>>;
}