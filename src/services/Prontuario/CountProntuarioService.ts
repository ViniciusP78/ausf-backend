import { getRepository } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class CountProntuarioService {
  public async execute(): Promise<number> {
    const prontuariosRepository = getRepository(Prontuario);

    let count = await prontuariosRepository
      .createQueryBuilder("prontuarios")
      .select("COUNT(prontuarios.id)", "count")
      .getRawOne()

    return count
  }
}

export default CountProntuarioService