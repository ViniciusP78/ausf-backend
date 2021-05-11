import { getRepository } from 'typeorm';

import Registro from '../../models/Registro';
import AppError from '../../errors/AppError';

class ListRegistroService {
  public async execute(prontuario_id: string): Promise<Registro[]> {
    const registrosRepository = getRepository(Registro);

    const registros = await registrosRepository.find({where: {prontuario_id}});

    if (!registros)
      throw new AppError('Sem Registros', 404);

    return registros
  }
}

export default ListRegistroService