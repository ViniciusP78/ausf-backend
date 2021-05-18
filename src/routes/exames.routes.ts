import { Router } from 'express';
import CreateExameService from '../services/Exame/CreateExameService';
import ListExameService from '../services/Exame/ListExameService';

const examesRouter = Router();

examesRouter.post('/', async (request, response) => {
  const {prontuario_id, url} = request.body;

  const createExame = new CreateExameService();

  const exame = await createExame.execute({prontuario_id, url});

  return response.json(exame);
})

examesRouter.get('/list/:prontuario_id', async (request, response) => {
  const { prontuario_id } = request.params;

  const listExame = new ListExameService();

  const exames = await listExame.execute(prontuario_id);

  return response.json(exames)
})

export default examesRouter;