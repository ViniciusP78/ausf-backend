import { Brackets, getRepository} from 'typeorm';

import Consulta from '../../models/Consulta';

class ListConsultaService {
  public async execute(search?: string, data?: string): Promise<Consulta[]> {
    const consultasRepository = getRepository(Consulta);

    // const consultas = await consultasRepository.find({relations: ["prontuario", "medico"]});
    console.log(search)
    let consultas = await consultasRepository.createQueryBuilder("consulta")
      .innerJoinAndSelect("consulta.prontuario", "prontuario")
      .innerJoinAndSelect("consulta.medico", "medico")
      .innerJoinAndSelect("prontuario.paciente", "paciente")
      .where(data ? "data_agendada::date = :data" : "1=1",{data})
      .andWhere(new Brackets(qb => {
        qb.where(search ? "paciente.nome iLIKE :search" : "1=1", {search: search ? `%${search}%` : '%%'})
        .orWhere("paciente.cartao_sus iLIKE :search",{search: search ? `%${search}%` : '%%'})
        .orWhere("paciente.CPF iLIKE :search",{search: search ? `%${search}%` : '%%'})
      })).orderBy('data_agendada', 'DESC')
      .getMany();


    consultas.forEach((consulta) => {
      delete consulta.medico.password; //Portante
    })

    


    return consultas;
  }
}

export default ListConsultaService;