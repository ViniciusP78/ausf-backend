import { getRepository } from 'typeorm';

import User from '../../models/User';

class ListUserService {
  public async execute(search: string, cargo: number): Promise<User[]> {
    const usersRepository = getRepository(User);

    let users = await usersRepository.createQueryBuilder("user")
      .where(cargo ? "cargo_id = :cargo": "1=1", {cargo})
      .andWhere("name iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .getMany();

    users.forEach((user) => {
      delete user.password //Portante
    })

    return users;
  }
}

export default ListUserService