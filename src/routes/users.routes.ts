import { response, Router } from 'express';
import CreateUserService from '../services/User/CreateUserService';
import DeleteUserService from '../services/User/DeleteUserService';
import GetUserService from '../services/User/GetUserService';
import ListUserService from '../services/User/ListUserService';
import UpdateUserService from '../services/User/UpdateUserService';

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

usersRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, login, password, cargo_id } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id, name, login, password, cargo_id 
  })

  return response.json(user);
})

usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteUser = new DeleteUserService();

  const result = await deleteUser.execute(id);

  return response.json(result);
})

export default usersRouter;