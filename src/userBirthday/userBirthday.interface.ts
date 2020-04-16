import { IPerson } from '../person/person.interface';

export interface IUserBirthday extends IPerson {
  birthdayDate: Date;
}
