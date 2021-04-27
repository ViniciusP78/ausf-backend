import { getRepository } from 'typeorm';

import Paciente from '../../models/Paciente';

class GetPacienteService{
  public async execute(id: string): Promise<Paciente> {
    const pacientesRepository = getRepository(Paciente);

    const paciente = await pacientesRepository.findOne(id);

    return paciente;
  }
}

export default GetPacienteService;