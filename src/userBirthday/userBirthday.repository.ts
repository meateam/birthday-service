import { UserBirthdayModel } from './userBirthday.model';
import { IUserBirthday } from './userBirthday.interface';

export class UserBirthdayRepository {
  static create(user: IUserBirthday) {
    return UserBirthdayModel.create(user);
  }

  static getById(id: string) {
    return UserBirthdayModel.findById(id).exec();
  }

  static getByEmail(email: string) {
    return UserBirthdayModel.findOne({ email }).exec();
  }

  static delete(id: string) {
    return UserBirthdayModel.findByIdAndRemove(id).exec();
  }
}
