import { getRepository, Like, QueryBuilder } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class ListProntuarioService {
  public async execute(search?: string, pag = 1): Promise<Prontuario[]> {
    const prontuariosRepository = getRepository(Prontuario);

    const prontuarios = await prontuariosRepository.createQueryBuilder("prontuario")
      .innerJoinAndSelect("prontuario.paciente", "paciente")
      .where(search ? "paciente.nome % :search" : "1=1",{search})
      .orWhere("paciente.cartao_sus iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .orWhere("paciente.RG iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .orWhere("paciente.CPF iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .skip((10 * pag) - 10)
      .take(10)
      .getMany();

    

    return prontuarios;
  }
}

export default ListProntuarioService;