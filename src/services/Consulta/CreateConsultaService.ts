import { getRepository } from 'typeorm';

import Consulta from '../../models/Consulta';

interface Request {
  prontuario_id: string;
  data_agendada: Date;
  descricao: string;
  medico_id: string;
}

class CreateConsultaService {
  public async execute({prontuario_id, data_agendada, descricao, medico_id}: Request): Promise<Consulta> {
    const consultasRepository = getRepository(Consulta);

    const consulta = consultasRepository.create({
      prontuario_id,
      data_agendada,
      descricao,
      medico_id
    })

    await consultasRepository.save(consulta);

    return consulta
  }
}

export default CreateConsultaService;