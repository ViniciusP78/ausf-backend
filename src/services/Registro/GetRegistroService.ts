import { getRepository } from 'typeorm';

import Registro from '../../models/Registro';

import AppError from '../../errors/AppError';

class GetRegistroService {
  public async execute(id: string): Promise<Registro> {

    const registrosRepository = getRepository(Registro);

    const registro = await registrosRepository.findOne(id)

    if(!registro)
      throw new AppError('Registro inexistente', 404);

    return registro;
  }
}

export default GetRegistroService