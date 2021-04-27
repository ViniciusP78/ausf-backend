import { Router } from 'express';
import CreatePacienteService from '../services/Paciente/CreatePacienteService';
import GetPacienteService from '../services/Paciente/GetPacienteService';
import ListPacienteService from '../services/Paciente/ListPacienteService';

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
  const getPaciente = new GetPacienteService();
  
})

export default pacientesRouter;