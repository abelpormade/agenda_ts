import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatosService {
  constructor(
    @InjectRepository(Contato)
    private readonly contatoRepository: Repository<Contato>,
  ) {}

  create(createContatoDto: CreateContatoDto) {
    const novo = this.contatoRepository.create(createContatoDto);
    return this.contatoRepository.save(novo);
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
