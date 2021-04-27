import { DeleteResult, getRepository } from 'typeorm';

import Consulta from '../../models/Consulta';

class DeleteConsultaService {
  public async execute(id: string): Promise<DeleteResult> {
    const consultasRepository = getRepository(Consulta);

    const result = await consultasRepository.delete(id);

    return result;
  }
}

export default DeleteConsultaService