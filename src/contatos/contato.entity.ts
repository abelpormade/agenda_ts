import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Atividade } from '../atividades/atividade.entity';

@Entity('contatos')
export class Contato {
  @PrimaryGeneratedColumn()
  id_contato: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  cargo: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.contatos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Empresa, (empresa) => empresa.contatos, {
    onDelete: 'CASCADE',
  })
  empresa: Empresa;

  @OneToMany(() => Atividade, (atividade) => atividade.contato)
  atividades: Atividade[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  atualizado_em: Date;
}
