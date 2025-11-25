import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { Contato } from './contato.entity';
import {Usuario} from '../usuarios/usuario.entity';
import {Empresa} from '../empresas/empresa.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Contato,Usuario,Empresa])],
  controllers: [ContatosController],
  providers: [ContatosService],
  exports: [ContatosService],
})
export class ContatosModule {}
