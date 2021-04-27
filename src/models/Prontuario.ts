import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Paciente from './Paciente';

@Entity('prontuarios')
class Prontuario {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  paciente_id: string;

  @OneToOne(() => Paciente)
  @JoinColumn({name: 'paciente_id'})
  paciente: Paciente;

  @Column('boolean', {default: true})
  status: boolean;

  @Column()
  observacoes: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Prontuario;