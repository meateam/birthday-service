import { PersonManager } from './person.manager';
import { NotFoundError } from '../utils/erros/userErrors';

export class PersonController {
  static getPersonById = async (id: string) => {
    return await PersonManager.getPersonById(id).catch((err) => {
      throw new NotFoundError(`can't fount user ${id}`);
    });
  };
}
