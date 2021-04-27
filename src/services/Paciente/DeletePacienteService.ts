import { DeleteResult, getRepository } from 'typeorm';

import Paciente from '../../models/Paciente';

class DeletePacienteService {
  public async execute(id: string): Promise<DeleteResult> {
    const pacientesRepository = getRepository(Paciente);

    const paciente = await pacientesRepository.delete(id);
    
    return paciente;
  }
}

export default DeletePacienteService;