import { Router } from 'express';
import CreatePacienteService from '../services/Paciente/CreatePacienteService';
import DeletePacienteService from '../services/Paciente/DeletePacienteService';
import GetPacienteService from '../services/Paciente/GetPacienteService';
import ListPacienteService from '../services/Paciente/ListPacienteService';
import UpdatePacienteService from '../services/Paciente/UpdatePacienteService';

const pacientesRouter = Router();

pacientesRouter.post('/', async (request, response) => {
  const pacienteRequest = request.body;

  const createPaciente = new CreatePacienteService();

  const paciente = await createPaciente.execute(pacienteRequest)

  return response.json(paciente)
})

pacientesRouter.get('/', async (request, response) => {
 const listPaciente = new ListPacienteService();

 const pacientes = await listPaciente.execute()

 return response.json(pacientes)
})

pacientesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const getPaciente = new GetPacienteService();

  const paciente = await getPaciente.execute(id);

  return response.json(paciente);
})

pacientesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const pacienteRequest = request.body;

  const updatePaciente = new UpdatePacienteService();

  const paciente = await updatePaciente.execute(id, pacienteRequest);

  return response.json(paciente);
})

pacientesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deletePaciente = new DeletePacienteService();

  const result = await deletePaciente.execute(id);

  return response.json(result);
})

export default pacientesRouter;