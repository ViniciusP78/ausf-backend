import { Router } from 'express';
import CreateConsultaService from '../services/Consulta/CreateConsultaService';
import DeleteConsultaService from '../services/Consulta/DeleteConsultaService';
import GetConsultaService from '../services/Consulta/GetConsultaService';
import ListConsultaService from '../services/Consulta/ListConsultaService';

const consultasRouter = Router();

consultasRouter.post('/', async (request, response) => {
  const {prontuario_id, data_agendada, descricao, medico_id} = request.body;

  const createConsulta = new CreateConsultaService();

  const consulta = await createConsulta.execute({prontuario_id, data_agendada, descricao, medico_id});

  return response.json(consulta);
})

consultasRouter.get('/', async (request, response) => {
  const search = request.query.search as string;
  const data = request.query.data as string;

  const listConsulta = new ListConsultaService();

  const consultas = await listConsulta.execute(search, data);

  return response.json(consultas);
})

consultasRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getConsulta = new GetConsultaService();

  const consulta = await getConsulta.execute(id);

  return response.json(consulta);
})

consultasRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteConsulta = new DeleteConsultaService();

  const result = await deleteConsulta.execute(id);

  return response.json(result)
})

export default consultasRouter;