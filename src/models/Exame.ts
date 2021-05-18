import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import Prontuario from './Prontuario';

@Entity('exames')
class Exame {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prontuario_id: string;

  @ManyToOne(() => Prontuario)
  @JoinColumn({name: 'prontuario_id'})
  prontuario: Prontuario;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Exame