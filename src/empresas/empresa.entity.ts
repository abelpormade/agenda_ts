import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contato } from '../contatos/contato.entity';

@Entity('empresas')
export class Empresa {
  @PrimaryGeneratedColumn()
  id_empresa: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 150 })
  endereco: string;

  @Column({ length: 100 })
  ramo_atuacao: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  atualizado_em: Date;

  @OneToMany(() => Contato, (contato) => contato.empresa)
  contatos: Contato[];
}
