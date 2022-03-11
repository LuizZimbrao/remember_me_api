import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';

export default (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(500);
  console.log(error);
  next();
};
