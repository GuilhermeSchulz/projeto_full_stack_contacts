import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContacts, IContactsReturn } from "../../interfaces/contacts.interface";
import { IUserData } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { ContactsReturnSerializer } from "../../schemas/contact.schema";

export const createContactService = async (
  contactData: IContacts, userData:IUserData
): Promise<IContactsReturn> => {
  
  const ContactRepository = AppDataSource.getRepository(Contacts);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({id: userData.id})
  const newObj = {...contactData, user: user}
  const createContact = ContactRepository.create(newObj);

  await ContactRepository.save(createContact);

  const contactReturnWithoutUser = await ContactsReturnSerializer.validate(
    createContact,
    {
      stripUnknown: true,
    }
  );

  return contactReturnWithoutUser;
};
