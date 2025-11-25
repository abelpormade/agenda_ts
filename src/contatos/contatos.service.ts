import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Usuario } from 'src/usuarios/usuario.entity';
import { Empresa } from 'src/empresas/empresa.entity'

@Injectable()
export class ContatosService {
  constructor(
    @InjectRepository(Contato)
    private readonly contatoRepository: Repository<Contato>,


  @InjectRepository(Usuario)
  private readonly usuarioRepository: Repository<Usuario>,

  @InjectRepository(Empresa)
  private readonly empresaRepository: Repository<Empresa>,
  
  
  
  ) {}

  async create(dto: CreateContatoDto) {

    const usuarioId = await this.usuarioRepository.findOne({
      where: { id_usuario: dto.usuario_Id },
    });
    if (!usuarioId ) {
      throw new NotFoundException(`Ùsuario com o ID ${dto.usuario_Id} não existe`);
    }
    
    const empresa = await this.empresaRepository.findOne({
    where: { id_empresa: dto.empresa_Id },
  });

  if (!empresa) {
    throw new NotFoundException(`Empresa com ID ${dto.empresa_Id} não existe`);
  }


  const contato = this.contatoRepository.create({
    nome: dto.nome,
    email: dto.email,
    telefone: dto.telefone,
    cargo: dto.cargo,
    observacoes: dto.observacoes,

    usuario_Id: dto.usuario_Id,
    empresa_Id: dto.empresa_Id,

  });

  return await this.contatoRepository.save(contato);
}


  async findAll() {
  const todasEmpresas = await this.contatoRepository.find();

  if (!todasEmpresas || todasEmpresas.length === 0) {
    throw new NotFoundException('Nenhuma empresa encontrada');
  }

  return todasEmpresas;
}

  findOne(id: number) {
    return this.contatoRepository.findOne({
      where: { id_contato: id },
      relations: ['empresa'],
    });
  }

  async update(id: number, updateContatoDto: UpdateContatoDto) {
    await this.contatoRepository.update(id, updateContatoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const contato = await this.findOne(id);
    if (!contato) return { message: 'Contato não encontrado' };
    await this.contatoRepository.delete(id);
    return { message: 'Contato removido com sucesso' };
  }
}
