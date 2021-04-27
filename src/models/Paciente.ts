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

  @Column({nullable: true})
  cidade_nascimento: string;

  @Column({nullable: true})
  nome_mae: string;

  @Column({nullable: true})
  nome_pai: string;

  @Column({nullable: true})
  logradouro: string;

  @Column({nullable: true})
  telefone: string;

  @Column({nullable: true, type: 'float'})
  peso: number;

  @Column({nullable: true, type: 'float'})
  altura: number;

  @Column({nullable: true})
  RG: string;

  @Column({nullable: true})
  CPF: string;

  @Column({nullable: true})
  cartao_sus: string;

  @Column({nullable: true})
  escolaridade: string;

  @Column({nullable: true})
  etnia: string;

  @Column({nullable: true})
  sexualidade: string;

  @Column({nullable: true})
  sus_dependente: boolean;

  @Column({nullable: true})
  gestante: boolean;

  @Column({nullable: true})
  deficiente_fisico: boolean;

  @Column({nullable: true})
  fumante: boolean;

  @Column({nullable: true})
  usa_alcool: boolean;
  
  @Column({nullable: true})
  usa_drogas: boolean;

}

export default Paciente