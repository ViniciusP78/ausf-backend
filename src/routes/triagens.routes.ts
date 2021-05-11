import { Router } from 'express';
import CreateTriagemService from '../services/Triagem/CreateTriagemService';
import GetTriagemService from '../services/Triagem/GetTriagemService';
import ListTriagemService from '../services/Triagem/ListTriagemService';

const triagensRouter = Router();

triagensRouter.post('/', async (request, response) => {
  const { prontuario_id, enfermeira_id, pressao, altura, peso } = request.body;

  const createTriagem = new CreateTriagemService();

  const triagem = await createTriagem.execute({prontuario_id, enfermeira_id, pressao, altura, peso});

  return response.json(triagem);
})

triagensRouter.get('/list/:prontuario_id', async (request, response) => {
  const { prontuario_id } = request.params;

  const listTriagem = new ListTriagemService();

  const triagens = await listTriagem.execute(prontuario_id);

  return response.json(triagens);
})

triagensRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getTriagem = new GetTriagemService();

  const triagem = await getTriagem.execute(id);

  return response.json(triagem);
})

export default triagensRouter;