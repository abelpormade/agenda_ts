import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const existe = await this.usuarioRepository.findOne({
        where: { email: createUsuarioDto.email },
      });
      if (existe) {
        throw new ConflictException('E-mail já cadastrado');
      }

      const senhaHash: string = await bcrypt.hash(createUsuarioDto.senha, 10);
      const novo = this.usuarioRepository.create({
        ...createUsuarioDto,
        senha: senhaHash,
      });

      const usuario = await this.usuarioRepository.save(novo);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...usuarioSemSenha } = usuario;
      return usuarioSemSenha;
    } catch (error: any) {
      if (error instanceof ConflictException) {
        throw error;
      }
      console.error('Erro ao criar usuário:', error);

      throw new InternalServerErrorException('Erro ao criar usuário');
    }
  }
  async findAll() {
    const usuarios = await this.usuarioRepository.find();
    if (!usuarios || usuarios.length === 0) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }
    return usuarios;
  }

  async findOne(id: number) {
    const usuarioId = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
    });
    if (!usuarioId || usuarioId === null) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuarioId;
  }
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
    });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    try {
      await this.usuarioRepository.update(id, updateUsuarioDto);
      return this.findOne(id);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new InternalServerErrorException('Erro ao atualizar usuário');
    }
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    if (!usuario) return { message: 'Usuário não encontrado' };
    await this.usuarioRepository.delete(id);
    return { message: 'Usuário removido com sucesso' };
  }
}
