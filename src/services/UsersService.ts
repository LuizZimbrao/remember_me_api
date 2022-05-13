import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UsersRepository from '../repositories/UsersRepository';

interface ICreateUsers {
  email: string;
  password: string;
  name: string;
}

interface IFilteredUserData {
  email: string;
  password?: string;
  name: string;
}

class UsersService {
  async authenticate(email: string, password: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      return { error: 'Usuário não encontrado' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { error: 'Senha inválida' };
    }

    dotenv.config();
    const secret = JSON.stringify(process.env.SECRETSTRING);

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1D' });

    const filteredUserData: IFilteredUserData = user;

    delete filteredUserData.password;

    return { user, token };
  }

  async create({ email, password, name }: ICreateUsers) {
    if (!email) {
      return { error: 'O campo e-mail é obrigatório' };
    }

    if (!password) {
      return { error: 'O campo senha é obrigatória' };
    }

    if (!name) {
      return { error: 'O campo nome é obrigatório' };
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      return { error: 'E-mail já está em uso' };
    }

    const user = usersRepository.create({
      email,
      password,
      name,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default new UsersService();
