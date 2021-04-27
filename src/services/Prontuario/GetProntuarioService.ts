import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class GetProntuarioService {
  public async execute(id: string): Promise<Prontuario> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuario = await prontuariosRepository.findOne(id, { relations: ["paciente"] });

    return prontuario

  }
}

export default GetProntuarioService;