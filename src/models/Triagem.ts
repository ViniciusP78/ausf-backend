import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import Prontuario from './Prontuario';
import User from './User';

@Entity('triagem')
class Triagem {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prontuario_id: string;

  @ManyToOne(() => Prontuario)
  @JoinColumn({name: 'prontuario_id'})
  prontuario: Prontuario;

  @Column()
  enfermeira_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'enfermeira_id'})
  enfermeira: User;

  @Column()
  pressao: string;

  @Column()
  peso: string;

  @Column()
  altura: string;

  @CreateDateColumn()
  created_at: Date;

}

export default Triagem
