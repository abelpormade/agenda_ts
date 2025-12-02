import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';



export class CreateEmpresaDto {
  @ApiProperty({example:"Pormade",description:"Nome da empresa"})
  @IsString()
  nome: string;

  @ApiProperty({example:"União da Vitoria"})
  @IsString()
  endereco: string;


  @ApiProperty({example:"Arquitetura"})
  @IsString()
  ramo_atuacao: string;

  @ApiProperty({example:"42999455387"})
  @IsString()
  telefone: string;
}
