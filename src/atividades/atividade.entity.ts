import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Contato } from '../contatos/contato.entity';

@Entity('atividades')
export class Atividade {
  @PrimaryGeneratedColumn()
  id_atividade: number;

  @ManyToOne(() => Contato, (contato) => contato.atividades, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'id_contato' })
  contato: Contato;
  @Column({ name: 'id_contato', nullable: true, update: false })
id_contato:number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  data_entrega: Date;

  @Column({
    type: 'enum',
    enum: ['baixa', 'media', 'alta'],
    enumName: 'prioridade_enum',
    default: 'media',
  })
  prioridade: 'baixa' | 'media' | 'alta';

  @Column({ type: 'boolean', default: false })
  notificar: boolean;

  @Column({ type: 'timestamp', nullable: true })
  data_notificacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  data_atualizacao: Date;

  @Column({
    type: 'enum',
    enum: ['pendente', 'concluida'],
    enumName: 'status_enum',
    default: 'pendente',
  })
  status: 'pendente' | 'concluida';

}
