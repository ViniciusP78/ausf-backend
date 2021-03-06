import { Router } from 'express';
import CountProntuarioService from '../services/Prontuario/CountProntuarioService';
import CreateProntuarioService from '../services/Prontuario/CreateProntuarioService';
import DeleteProntuarioService from '../services/Prontuario/DeleteProntuarioService';
import GetProntuarioService from '../services/Prontuario/GetProntuarioService';
import ListProntuarioService from '../services/Prontuario/ListProntuarioService';
import UpdateProntuarioService from '../services/Prontuario/UpdateProntuarioService';

const prontuariosRouter = Router();

prontuariosRouter.post('/', async (request, response) => {
  const { paciente_id, observacoes } = request.body;

  const createProntuario = new CreateProntuarioService();

  const prontuario = await createProntuario.execute({paciente_id, observacoes});

  return response.json(prontuario);
})

prontuariosRouter.get('/', async (request, response) => {
  const search = request.query.search as string;
  const pag = request.query.pag != null ? Number(request.query.pag) : 1;


  const listProntuario = new ListProntuarioService();

  const prontuarios = await listProntuario.execute(search, pag);

  return response.json(prontuarios)
})

prontuariosRouter.get('/count', async (request, response) => {
  const countProntuario = new CountProntuarioService();

  const count = await countProntuario.execute();

  return response.json(count);

})

prontuariosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getProntuario = new GetProntuarioService();

  const prontuario = await getProntuario.execute(id);

  return response.json(prontuario);
})

prontuariosRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { paciente_id, observacoes } = request.body;

  const updateProntuario = new UpdateProntuarioService();

  const prontuario = await updateProntuario.execute({
    id, paciente_id, observacoes
  });

  return response.json(prontuario);
})

prontuariosRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteProntuario = new DeleteProntuarioService();

  const result = await deleteProntuario.execute(id);

  return response.json(result);
})



export default prontuariosRouter;