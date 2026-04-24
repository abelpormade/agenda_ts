import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtividadesEntity } from './infra/entities/atividade.entity';
import { AtividadesService } from './atividades.service';
import { AtividadesController } from './atividades.controller';
import { Contato } from '../contatos/contato.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AtividadesEntity, Contato])],
  controllers: [AtividadesController],
  providers: [AtividadesService],
  exports: [AtividadesService],
})
export class AtividadesModule { }
