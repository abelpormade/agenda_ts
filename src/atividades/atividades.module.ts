import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './atividade.entity';
import { AtividadesService } from './atividades.service';
import { AtividadesController } from './atividades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Atividade])],
  controllers: [AtividadesController],
  providers: [AtividadesService],
  exports: [AtividadesService],
})
export class AtividadesModule {}
