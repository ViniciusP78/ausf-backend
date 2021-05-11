import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Prontuario from './Prontuario';

@Entity('registros')
class Registro {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  texto: string;

  @Column()
  prontuario_id: string;

  @ManyToOne(() => Prontuario)
  @JoinColumn({name: 'prontuario_id'})
  prontuario: Prontuario;

  @Column('boolean', {default: true})
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Registro
