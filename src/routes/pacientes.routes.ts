import { Router } from 'express';
import CreatePacienteService from '../services/Paciente/CreatePacienteService';

const pacientesRouter = Router();

pacientesRouter.post('/', async (request, response) => {
  const pacienteRequest = request.body;

  const createPaciente = new CreatePacienteService();

  const paciente = await createPaciente.execute(pacienteRequest)

  return response.json(paciente)
})

export default pacientesRouter;