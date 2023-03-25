import AppDataSource from "../../data-source";
import { AppError } from "../../errors/errors";
import { IContactsReturn, IContactUpdate } from "../../interfaces/contacts.interface";
import { Contacts } from "../../entities/contacts.entity";


export const updateContactService = async (
  contactData: IContactUpdate,
  contactId: string
): Promise<IContactsReturn> => {
  if (!contactData) {
    throw new AppError("Missing Params", 401);
  }
  const contactRepository = AppDataSource.getRepository(Contacts);
  const contact = await contactRepository.findOneBy({ id: contactId });
  if(!contact){
    throw new AppError("Contact not found", 404);
  }


  const newObj = {
    ...contact,
    ...contactData,
  };

  await contactRepository.save(newObj);
 
  return newObj
};
