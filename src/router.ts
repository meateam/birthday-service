import { Router } from 'express';
import config from './config';
import { userBirthdayRouter } from './userBirthday/userBirthday.router';

const appRouter: Router = Router();

appRouter.get('/isalive', (req, res, next) => {
  res.send('alive');
});
appRouter.use('/api/birthday', userBirthdayRouter);

export default appRouter;
