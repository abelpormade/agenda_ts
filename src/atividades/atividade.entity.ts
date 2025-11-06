import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Contato } from 'src/contatos/contato.entity';

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
    default: 'media',
  })
  prioridade: 'baixa' | 'media' | 'alta';

  @Column({ type: 'boolean', default: false })
  notificar: boolean;

  @Column({ type: 'timestamp', nullable: true })
  data_notificacao: Date;

  @Column({
    type: 'enum',
    enum: ['pendente', 'concluida'],
    default: 'pendente',
  })
  status: 'pendente' | 'concluida';

  @CreateDateColumn({ name: 'criado_em' })
  criado_em: Date;

  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizado_em: Date;
}
