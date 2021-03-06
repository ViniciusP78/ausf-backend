import { Router } from 'express';
import CreateRegistroService from '../services/Registro/CreateRegistroService';
import GetRegistroService from '../services/Registro/GetRegistroService';
import ListRegistroService from '../services/Registro/ListRegistroService';

const registrosRouter = Router();

registrosRouter.post('/', async (request, response) => {
  const { texto, prontuario_id } = request.body;

  const createRegistro = new CreateRegistroService();

  const registro = await createRegistro.execute({texto, prontuario_id});

  return response.json(registro);
})

registrosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getRegistro = new GetRegistroService();

  const registro = await getRegistro.execute(id);

  return response.json(registro);
})

registrosRouter.get('/list/:prontuario_id', async (request, response) => {
  const { prontuario_id } = request.params;

  const listRegistro = new ListRegistroService();

  const registros = await listRegistro.execute(prontuario_id);

  return response.json(registros);
})

export default registrosRouter;