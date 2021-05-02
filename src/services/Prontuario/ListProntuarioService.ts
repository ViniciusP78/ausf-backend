import { getRepository, Like, QueryBuilder } from 'typeorm';

import Prontuario from '../../models/Prontuario';

class ListProntuarioService {
  public async execute(search?: string): Promise<Prontuario[]> {
    const prontuariosRepository = getRepository(Prontuario);


    const prontuarios = await prontuariosRepository.createQueryBuilder("prontuario")
      .innerJoinAndSelect("prontuario.paciente", "paciente")
      .where("paciente.nome iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .orWhere("paciente.cartao_sus iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .orWhere("paciente.RG iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .orWhere("paciente.CPF iLIKE :search",{search: search ? `%${search}%` : '%%'})
      .getMany();

    

    return prontuarios;
  }
}

export default ListProntuarioService;