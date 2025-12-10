import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './atividade.entity';
import { AtividadesService } from './atividades.service';
import { AtividadesController } from './atividades.controller';
import { Contato } from '../contatos/contato.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Atividade, Contato])],
  controllers: [AtividadesController],
  providers: [AtividadesService],
  exports: [AtividadesService],
})
export class AtividadesModule {}
