import { getRepository } from 'typeorm';

import Registro from '../../models/Registro';

interface Request{
  texto: string;
  prontuario_id: string
}

class CreateRegistroService {
  public async execute({texto, prontuario_id}: Request): Promise<Registro> {

    const registrosRepository = getRepository(Registro);

    const registro = registrosRepository.create({
      texto,
      prontuario_id
    })

    await registrosRepository.save(registro);

    return registro;
  }
}

export default CreateRegistroService