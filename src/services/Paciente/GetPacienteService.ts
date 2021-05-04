import { getRepository } from 'typeorm';

import Paciente from '../../models/Paciente';

import AppError from '../../errors/AppError';

class GetPacienteService{
  public async execute(id: string): Promise<Paciente> {
    const pacientesRepository = getRepository(Paciente);

    const paciente = await pacientesRepository.findOne(id);

    if(!paciente)
      throw new AppError('Paciente inexistente', 404);

    return paciente;
  }
}

export default GetPacienteService;