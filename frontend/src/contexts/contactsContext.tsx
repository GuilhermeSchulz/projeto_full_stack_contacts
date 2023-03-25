import { createContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { IContactContext, IContactReturn } from "../interfaces/contactsInterface";
import { instance } from "../services/instance";
import { iErrorAxios } from "./userContext";
interface iProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext({} as IContactContext);

export const ContactsProvider = ({ children }: iProviderProps) => {
    const [contacts, setContacts] = useState<IContactReturn[] | []>([])
    const [addContact, setAddContact] = useState(false)
    const [updateContact, setUpdateContact] = useState(false)

    const onSubmitContact = (data: FieldValues) => createContact(data)
    const onDeleteContact = (id: string) => deleteSpecificContact(id)
    const onUpdateContact = (id: string, data: FieldValues) => updateSpecificContact(id, data)

    const createContact = (data: FieldValues) => {
        const token = localStorage.getItem("TOKEN@TRUETIES")
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .post("contacts", data)
                .then(response => {
                    toast.success("Contact Created Successfully")
                    getContacts()
                    setAddContact(false)
                })
                .catch((err: iErrorAxios) => {
                    toast.error("Failed to create contact")
                    console.log(err)
                })
        }
    }
    const getContacts = () => {
        const token = localStorage.getItem("TOKEN@TRUETIES")
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .get("contacts")
                .then((response) => {
                    setContacts(response.data)
                })
                .catch((err) =>
                    console.log(err)
                )
        }
    }
    const updateSpecificContact = (id: string, data: FieldValues) => {
        const token = localStorage.getItem("TOKEN@TRUETIES")
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .patch(`contacts/${id}`, data)
                .then((response) => {
                    getContacts()
                })
                .catch((err) =>
                    console.log(err)
                )
        }
    }
    const deleteSpecificContact = (id: string) => {
        const token = localStorage.getItem("TOKEN@TRUETIES")
        if (token) {
            instance.defaults.headers.authorization = `Bearer ${token}`;
            instance
                .delete(`contacts/${id}`)
                .then((response) => {
                    getContacts()
                })
                .catch((err) =>
                    console.log(err)
                )
        }
    }

    return (
        <UserContext.Provider value={{
            contacts,
            setContacts,
            addContact,
            setAddContact,
            updateContact,
            setUpdateContact,
            onSubmitContact,
            onDeleteContact,
            onUpdateContact
        }}>
            {children}
        </UserContext.Provider>
    )
}