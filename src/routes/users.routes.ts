import { Router } from 'express';
import CreateUserService from '../services/User/CreateUserService';
import GetUserService from '../services/User/GetUserService';
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

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getUser = new GetUserService();

  const user = await getUser.execute(id);

  return response.json(user);
})

export default usersRouter;