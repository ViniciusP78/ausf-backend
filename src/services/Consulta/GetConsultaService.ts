import { getRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import Consulta from '../../models/Consulta';

class GetConsultaService{
  public async execute(id: string): Promise<Consulta> {
    const consultasRepository = getRepository(Consulta);

    const consulta = await consultasRepository.findOne(id, {relations: ["prontuario", "medico"]});

    if(!consulta)
      throw new AppError('Consulta inexistente', 404);

    delete consulta.medico.password;

    return consulta
  }
}

export default GetConsultaService;