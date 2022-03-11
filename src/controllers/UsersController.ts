import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

interface IUserLogin {
  id: string;
  email: string;
  password?: string;
  name: string;
}

interface ILogin {
  user: IUserLogin
  token: number | string;
}

class UsersController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const login = await UsersService.authenticate(email, password) as ILogin;

    if (!login.token) {
      return res.status(401).json(login);
    }

    return res.json(login);
  }

  async store(req: Request, res: Response) {
    const { email, password, name } = req.body;

    const user = await UsersService.create({
      email,
      password,
      name,
    }) as IUser;

    if (!user.id) {
      res.status(400).json(user);
    }

    return res.json(user);
  }
}

export default new UsersController();
