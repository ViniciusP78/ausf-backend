import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

import AppError from '../../errors/AppError';


class GetProntuarioService {
  public async execute(id: string): Promise<Prontuario> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuario = await prontuariosRepository.findOne(id, { relations: ["paciente"] });

    if(!prontuario)
      throw new AppError('Prontuário inexistente', 404);

    return prontuario

  }
}

export default GetProntuarioService;