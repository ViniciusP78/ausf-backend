import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

interface Request {
  id: string
  paciente_id: string;
  observacoes?: string;
}

class UpdateProntuarioService {
  public async execute({id, paciente_id, observacoes}: Request): Promise<Prontuario> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuario = prontuariosRepository.create({
      id,
      paciente_id,
      observacoes
    })

    await prontuariosRepository.save(prontuario);

    return prontuario;
  }
}

export default UpdateProntuarioService