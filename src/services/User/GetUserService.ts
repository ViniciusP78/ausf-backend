import { getRepository } from 'typeorm';

import User from '../../models/User';

import AppError from '../../errors/AppError';

class GetUserService {
  public async execute(id: string): Promise<User> {
    
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id)

    if(!user)
      throw new AppError('Usuário Inexistente', 404)

    delete user.password; // Portante

    return user;
  }
}

export default GetUserService;