import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

interface Request {
  paciente_id: string;
  observacoes?: string;
}

class CreateProntuarioService {
  public async execute({paciente_id, observacoes}: Request): Promise<Prontuario> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuario = prontuariosRepository.create({
      paciente_id,
      observacoes
    })

    await prontuariosRepository.save(prontuario);

    return prontuario;
  }
}

export default CreateProntuarioService