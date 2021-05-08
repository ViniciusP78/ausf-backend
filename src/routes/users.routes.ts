import { Router } from 'express';
import CreateUserService from '../services/User/CreateUserService';
import ListUserService from '../services/User/ListUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, login, password, cargo_id } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    login,
    password,
    cargo_id
  })

  delete user.password //portante

  return response.json(user);
})

usersRouter.get('/', async (request, response) => {
  const search = request.query.search as string;
  const cargo = request.query.cargo as string;

  const listUser = new ListUserService();

  const users = await listUser.execute(search, Number(cargo))
  console.log(users);

  return response.json(users);
})

export default usersRouter;