import { DeleteResult, getRepository } from 'typeorm';

import User from '../../models/User';

class DeleteUserService {
  public async execute(id: string): Promise<DeleteResult> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.delete(id);

    return user;
  }
}

export default DeleteUserService;