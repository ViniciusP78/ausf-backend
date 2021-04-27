import { DeleteResult, getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class DeleteProntuarioService {
  public async execute(id: string): Promise<DeleteResult> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuario = await prontuariosRepository.delete(id);

    return prontuario;
  }
}

export default DeleteProntuarioService;