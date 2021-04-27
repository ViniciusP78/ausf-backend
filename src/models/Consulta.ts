import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Prontuario from './Prontuario';
import Usuario from './User';

@Entity('consultas')
class Consulta {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prontuario_id: string;

  @ManyToOne(() => Prontuario)
  @JoinColumn({name: 'prontuario_id'})
  prontuario: Prontuario;

  @Column()
  data_agendada: Date;

  @Column({nullable: true})
  descricao: string

  @Column()
  medico_id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({name: 'medico_id'})
  medico: Usuario

}

export default Consulta
