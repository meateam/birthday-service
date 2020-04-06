import { Router } from 'express';
import { BaseRequest } from '../utils/baseRequest';

// import { UserController } from './user.controller';
// import { FavoriteController } from './favorite/favorite.controller';

const userBirthdayRouter: Router = Router();

userBirthdayRouter.get('/:id', BaseRequest.wrapAsync(UserController.getUser));

export { userBirthdayRouter };
