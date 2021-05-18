import { getRepository } from 'typeorm';

import Exame from '../../models/Exame';

interface Request {
  prontuario_id: string;
  url: string
}

class CreateConsultaService {
  public async execute({prontuario_id, url}: Request): Promise<Exame> {
    const examesRepository = getRepository(Exame);

    const exame = examesRepository.create({
      prontuario_id,
      url
    })

    await examesRepository.save(exame);

    return exame
  }
}

export default CreateConsultaService;