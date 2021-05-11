import { getRepository } from 'typeorm';

import Triagem from '../../models/Triagem';

import AppError from '../../errors/AppError';

class GetTriagemService {
  public async execute(id: string): Promise<Triagem> {

    const triagemRepository = getRepository(Triagem);

    const triagem = await triagemRepository.findOne(id)

    if(!triagem)
      throw new AppError('Triagem inexistente', 404);

    return triagem;
  }
}

export default GetTriagemService;