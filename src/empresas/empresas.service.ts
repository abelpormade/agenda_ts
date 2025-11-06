import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    const nova = this.empresaRepository.create(createEmpresaDto);
    return this.empresaRepository.save(nova);
  }

  async findAll() {
    const empresas = await this.empresaRepository.find();
    if (!empresas || empresas.length === 0) {
      throw new NotFoundException('Nenhuma empresa encontrada');
    }
    return empresas;
  }

  async findOne(id: number) {
    const empresaId = await this.empresaRepository.findOne({
      where: { id_empresa: id },
    });
    if (!empresaId) {
      throw new NotFoundException('Empresa não encontrada,verifique o id');
    }
    return empresaId;
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.empresaRepository.findOne({
      where: { id_empresa: id },
    });
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrada`);
    }

    try {
      await this.empresaRepository.update(id, updateEmpresaDto);
      return this.findOne(id);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(
          'Já existe uma empresa com esses dados únicos',
        );
      }

      if (error.code === '23503') {
        throw new BadRequestException(
          'Alguma referência de chave estrangeira é inválida',
        );
      }

      throw new InternalServerErrorException('Erro ao atualizar a empresa');
    }
  }

  async remove(id: number) {
    const empresa = await this.findOne(id);
    if (!empresa) return { message: 'Empresa não encontrada' };
    await this.empresaRepository.delete(id);
    return { message: 'Empresa removida com sucesso' };
  }
}
