import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import { Contacts } from "../../entities/contacts.entity";
import { IContacts, IContactsReturn } from "../../interfaces/contacts.interface";

export const createContactService = async (
  contactData: IContacts
): Promise<IContactsReturn> => {
  const ContactRepository = AppDataSource.getRepository(Contacts);
  const verifyContact = await ContactRepository.findOneBy({
    email: contactData.email,
  });
  if (verifyContact) {
    throw new AppError("Contact already exists", 409);
  }
  const createContact = ContactRepository.create(contactData);

  await ContactRepository.save(createContact);



  return createContact;
};
