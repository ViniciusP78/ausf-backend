import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

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

export default usersRouter;