import AppDataSource from '../../data-source'
import { AppError } from '../../errors/errors';
import { Contacts } from '../../entities/contacts.entity';
import { IContactsReturn } from '../../interfaces/contacts.interface';

export const retrieveEspecificContactsService = async (idContacts: string): Promise<IContactsReturn> => {
const ContactsRepository = AppDataSource.getRepository(Contacts)
const specificContact = await ContactsRepository.findOneBy( { id: idContacts })

if (!specificContact) {
    throw new AppError("Contacts not found", 404)
}

return specificContact
};
