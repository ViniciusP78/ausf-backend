import { getRepository } from 'typeorm';

import Triagem from '../../models/Triagem';

interface Request{

  prontuario_id: string;
  enfermeira_id: string;
  pressao: string;
  altura: string;
  peso: string;
}

class CreateTriagemService {
  public async execute({prontuario_id, enfermeira_id, pressao, altura, peso}: Request): Promise<Triagem> {

    const triagemRepository = getRepository(Triagem);

    const triagem = triagemRepository.create({
      prontuario_id,
      enfermeira_id,
      pressao,
      altura,
      peso
    })

    await triagemRepository.save(triagem);

    return triagem;
  }
}

export default CreateTriagemService