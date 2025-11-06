import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';

@Injectable()
export class AtividadesService {
  constructor(
    @InjectRepository(Atividade)
    private readonly atividadeRepository: Repository<Atividade>,
  ) {}

  create(createAtividadeDto: CreateAtividadeDto) {
    const nova = this.atividadeRepository.create(createAtividadeDto);
    return this.atividadeRepository.save(nova);
  }

  findAll() {
    return this.atividadeRepository.find();
  }

  findOne(id: number) {
    return this.atividadeRepository.findOne({ where: { id_atividade: id } });
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    await this.atividadeRepository.update(id, updateAtividadeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const atividade = await this.findOne(id);
    if (!atividade) return { message: 'Atividade não encontrada' };
    await this.atividadeRepository.delete(id);
    return { message: 'Atividade removida com sucesso' };
  }
}
