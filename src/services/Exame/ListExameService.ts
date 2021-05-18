import { getRepository } from 'typeorm';

import Exame from '../../models/Exame';
import AppError from '../../errors/AppError';

class ListExameService {
  public async execute(prontuario_id: string): Promise<Exame[]> {
    const examesRepository = getRepository(Exame);

    const exames = await examesRepository.find({where: {prontuario_id}});

    if(!exames)
      throw new AppError('Sem exames', 404);

    return exames
  }
}

export default ListExameService