import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    dotenv.config();
    const secret = JSON.stringify(process.env.SECRETSTRING);

    jwt.verify(token, secret);

    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
}
