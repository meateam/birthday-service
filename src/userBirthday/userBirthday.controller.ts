import { Request, Response } from 'express';
import { IUserBirthday } from './userBirthday.interface';
import { PersonController } from '../person/person.controller';
import { UserBirthdayManager } from './userBirthday.manager';
import { IPerson } from '../person/person.interface';
import bodyParser = require('body-parser');

export class UserBirthdayController {
  static getUserBirthdayByID = async (req: Request, res: Response) => {
    // if (!Validations.isIdValid(req.params.id)) {
    //   throw new KUserIdInvalidError();
    // }
    const user = await PersonController.getPersonById(req.params.id);
    res.json(user);
  };

  static postUserBirthday = async (req: Request, res: Response) => {
    const person = (await PersonController.getPersonById(req.body.id)) as IPerson;
    const birthdayDateInput = new Date(req.body.date);

    const user: IUserBirthday = {
      firstName: person.firstName,
      lastName: person.lastName,
      id: person.id,
      hierarchy: person.hierarchy,
      hierarchyFlat: person.hierarchyFlat,
      mail: person.mail,
      birthdayDate: birthdayDateInput,
    };

    res.json(await UserBirthdayManager.create(user));
  };
}
