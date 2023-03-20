import AppDataSource from '../../data-source'
import { IContactsReturn } from '../../interfaces/contacts.interface';
import { Contacts } from '../../entities/contacts.entity';
import { AppError } from '../../errors/errors';

export const retrieveContactsService = async (userId:string):Promise<IContactsReturn[]> => {

    
    const ContactsRepository = AppDataSource.getRepository(Contacts)
    
    const allContactss = await ContactsRepository.findBy({
          user: { id: userId },
      });
    if(!allContactss){
        throw new AppError("Contacts not found", 404);
    }
    return allContactss
};
