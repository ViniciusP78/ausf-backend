import { getRepository } from 'typeorm';

import Paciente from '../../models/Paciente';

interface Request {
  nome: string;
  data_nascimento: Date;
  sexo: string;
  cidade_nascimento: string;
  nome_mae: string;
  nome_pai: string;
  logradouro: string;
  telefone: string;
  peso: number;
  altura: number;
  RG: string;
  CPF: string;
  cartao_sus: string;
  escolaridade: string;
  etnia: string;
  sexualidade: string;
  sus_dependente: boolean;
  gestante: boolean;
  deficiente_fisico: boolean;
  fumante: boolean;
  usa_alcool: boolean;
  usa_drogas: boolean;
}

class UpdatePacienteService {
  public async execute(id: string, pacienteRequest: Request): Promise<Paciente> {
    const pacientesRepository = getRepository(Paciente);

    const paciente = pacientesRepository.create({
      id,
      ...pacienteRequest
    })

    await pacientesRepository.save(paciente);

    return paciente;
  }
}

export default UpdatePacienteService;