
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/errors";
import { IContactsReturn } from "../../interfaces/contacts.interface";


export const deleteContactService = async (contactId:string) => {
if(!contactId) throw new AppError("Id inválido", 404)

const contactRepository = AppDataSource.getRepository(Contacts);
  const Contact:IContactsReturn = await contactRepository.findOneBy({ id: contactId });
  if(!Contact){
    throw new AppError("Contact not found", 404);
  }
  await contactRepository
  .createQueryBuilder()
  .delete()
  .where("id = :id", { id: contactId })
  .execute();


const contactReturn = await contactRepository.findOne({where:{ id: contactId},  withDeleted: true });

  return contactReturn

};
