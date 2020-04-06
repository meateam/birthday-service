import * as mongoose from 'mongoose';
import { IUserBirthday } from './userBirthday.interface';

const userBirthdaySchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    hierarchy: { type: [String], required: true },
    birthdayDate: { type: Date, required: true },
  },
  {
    id: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

userBirthdaySchema.virtual('id').set(function (this: IUserBirthday & mongoose.Document, id: string) {
  this._id = id;
});

export const UserBirthdayModel = mongoose.model<IUserBirthday & mongoose.Document>('UserBirthday', userBirthdaySchema);
