import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
  id: string;
  name: string;
  login: string;
  password: string;
  cargo_id: number;
}

class UpdateUserService {
  public async execute({id, name, login, password, cargo_id}: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      id,
      name,
      login,
      password: hashedPassword,
      cargo_id
    })

    await usersRepository.save(user);

    return user
  }
}

export default UpdateUserService