import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contato } from '../contatos/contato.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;

  @Column({ length: 50 })
  cargo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  criado_em: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  atualizado_em: Date;

  @OneToMany(() => Contato, (contato) => contato.usuario)
  contatos: Contato[];
}
