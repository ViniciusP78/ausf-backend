import { getRepository } from 'typeorm';

import User from '../../models/User';

class ListUserService {
  public async execute(search: string, cargo: number): Promise<User[]> {
    const usersRepository = getRepository(User);

    let users = await usersRepository.createQueryBuilder("user")
      .innerJoinAndSelect("user.cargo", "cargo")
      .where(cargo ? "cargo_id = :cargo": "1=1", {cargo})
      .andWhere(search ? "name % :search" : "1=1",{search})
      .getMany();

    users.forEach((user) => {
      delete user.password //Portante
    })

    return users;
  }
}

export default ListUserService