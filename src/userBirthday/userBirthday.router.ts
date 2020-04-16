import { Router } from 'express';
import { BaseRequest } from '../utils/baseRequest';
import { UserBirthdayController } from './userBirthday.controller';

const userBirthdayRouter: Router = Router();

userBirthdayRouter.get('/:id', BaseRequest.wrapAsync(UserBirthdayController.getUserBirthdayByID));
userBirthdayRouter.post('/', BaseRequest.wrapAsync(UserBirthdayController.postUserBirthday));

export { userBirthdayRouter };
