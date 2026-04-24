import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Empresa } from '../empresas/empresa.entity';
import { Atividade } from '../atividades/infra/entities/atividade.entity';

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

  @Column({ length: 100, nullable: true })
  cnpj: string;

  @Column({ length: 100, nullable: true })
  nome_empresa: string;

  @Column({ length: 100, nullable: true })
  setor: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  //relacionamento dza tabela contatos com a tabela usarios
  @ManyToOne(() => Usuario, (usuario) => usuario.contatos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_Id' })
  usuario: Usuario;

  @Column()
  usuario_Id: number;

  //relacionamento da tabela contatos com a tabela empresas
  @ManyToOne(() => Empresa, (empresa) => empresa.contatos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'empresa_Id' })
  empresa: Empresa;

  @Column()
  empresa_Id: number;

  @OneToMany(() => Atividade, (atividade) => atividade.contato)
  atividades: Atividade[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  atualizado_em: Date;
}
