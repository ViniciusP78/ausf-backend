import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class ListProntuarioService {
  public async execute(): Promise<Prontuario[]> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuarios = await prontuariosRepository.find({ relations: ["paciente"] })

    return prontuarios;
  }
}

export default ListProntuarioService;