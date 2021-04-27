import { getRepository } from 'typeorm';

import Paciente from '../../models/Paciente';

class ListPacienteService {
  public async execute(): Promise<Paciente[]> {
    const pacientesRepository = getRepository(Paciente);

    const pacientes = await pacientesRepository.find()

    return pacientes
  }
}

export default ListPacienteService