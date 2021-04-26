import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pacientes')
class Paciente {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  data_nascimento: Date;

  @Column('char')
  sexo: string;

  @Column()
  cidade_nascimento: string;

  @Column()
  nome_mae: string;

  @Column()
  nome_pai: string;

  @Column()
  logradouro: string;

  @Column()
  telefone: string;

  @Column('float')
  peso: number;

  @Column('float')
  altura: number;

  @Column()
  RG: string;

  @Column()
  CPF: string;

  @Column()
  cartao_sus: string;

  @Column()
  escolaridade: string;

  @Column()
  etnia: string;

  @Column()
  sexualidade: string;

  @Column()
  sus_dependente: boolean;

  @Column()
  gestante: boolean;

  @Column()
  deficiente_fisico: boolean;

  @Column()
  fumante: boolean;

  @Column()
  usa_alcool: boolean;
  
  @Column()
  usa_drogas: boolean;

}

export default Paciente