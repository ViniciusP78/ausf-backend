import { getRepository} from 'typeorm';

import Consulta from '../../models/Consulta';

class ListConsultaService {
  public async execute(): Promise<Consulta[]> {
    const consultasRepository = getRepository(Consulta);

    const consultas = await consultasRepository.find({relations: ["prontuario", "medico"]});

    consultas.forEach((consulta) => {
      delete consulta.medico.password; //Portante
    })

    return consultas;
  }
}

export default ListConsultaService;