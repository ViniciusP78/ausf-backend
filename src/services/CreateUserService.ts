import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  login: string;
  password: string;
  cargo_id: number;
}

class CreateUserService {
  public async execute({name, login, password, cargo_id}: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { login },
    });

    if (checkUserExists) {
      throw new AppError('Login already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      login,
      password: hashedPassword,
      cargo_id
    })

    await usersRepository.save(user);

    return user
  }
}

export default CreateUserService
