import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Contato } from 'src/contatos/contato.entity';

@Injectable()
export class AtividadesService {
  constructor(
    @InjectRepository(Atividade)
    private readonly atividadeRepository: Repository<Atividade>,

    @InjectRepository(Contato)
    private readonly contatoRepository: Repository<Contato>,
  ) {}

  async create(createAtividadeDto: CreateAtividadeDto) {
    const contato = await this.contatoRepository.findOne({
      where: { id_contato: createAtividadeDto.id_contato },
    });

    if (!contato) {
      throw new NotFoundException(
        `Contato com o ID ${createAtividadeDto.id_contato} não existe`,
      );
    }

    const nova = this.atividadeRepository.create(createAtividadeDto);
    return this.atividadeRepository.save(nova);
  }

  findAll() {
    return this.atividadeRepository.find();
  }

  async findOne(id: number) {
    const EncontrarPorId = await this.atividadeRepository.findOne({
      where: { id_atividade: id },
    });
    if (!EncontrarPorId || EncontrarPorId === null) {
      return { message: 'Atividade Inexistente' };
    }
    return EncontrarPorId;
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    await this.atividadeRepository.update(id, updateAtividadeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const atividade = await this.atividadeRepository.findOne({
      where: { id_atividade: id },
    });

    if (!atividade || atividade === null) {
      return { message: 'Atividade não encontrada' };
    }
    await this.atividadeRepository.delete(id);
    return { message: 'Atividade removida com sucesso' };
  }
}
