import { UserBirthdayRepository } from './userBirthday.repository';
import { IUserBirthday } from './userBirthday.interface';

export class UserBirthdayManager {
  static create(user: IUserBirthday) {
    return UserBirthdayRepository.create(user);
  }
}
