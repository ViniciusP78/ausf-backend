import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface Request {
  login: string,
  password: string,
}

class AuthenticateUserService {
  public async execute({ login, password }: Request): Promise<{ user: User, token: string }> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { login }});

    if (!user) {
      throw new AppError('Incorrect login/password combination', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect login/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService
