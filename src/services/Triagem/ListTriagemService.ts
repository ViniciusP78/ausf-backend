import { getRepository } from 'typeorm';

import Triagem from '../../models/Triagem';
import AppError from '../../errors/AppError';

class ListTriagemService {
  public async execute(prontuario_id: string): Promise<Triagem[]> {
    const triagensRepository = getRepository(Triagem);

    const triagens = await triagensRepository.find({where: {prontuario_id}});

    if (!triagens)
      throw new AppError('Sem triagens', 404);

    return triagens;
  }
}

export default ListTriagemService;