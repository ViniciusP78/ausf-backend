import { Router } from 'express';
import CreateExameService from '../services/Exame/CreateExameService';

const examesRouter = Router();

examesRouter.post('/', async (request, response) => {
  const {prontuario_id, url} = request.body;

  const createExame = new CreateExameService();

  const exame = await createExame.execute({prontuario_id, url});

  return response.json(exame);
})

export default examesRouter;