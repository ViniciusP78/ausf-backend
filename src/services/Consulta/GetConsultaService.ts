import { getRepository } from 'typeorm';

import Consulta from '../../models/Consulta';

class GetConsultaService{
  public async execute(id: string): Promise<Consulta> {
    const consultasRepository = getRepository(Consulta);

    const consulta = await consultasRepository.findOne(id, {relations: ["prontuario", "medico"]});

    delete consulta.medico.password;

    return consulta
  }
}

export default GetConsultaService;