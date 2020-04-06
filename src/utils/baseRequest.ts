import { Response, Request, NextFunction } from 'express';

export class BaseRequest {
  static wrapAsync(func: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      func(req, res, next).catch(next);
    };
  }
}
