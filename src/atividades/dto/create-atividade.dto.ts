import {
  IsNotEmpty,
  IsString,
  IsDateString,
  MaxLength,
  IsBoolean,
  IsInt,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAtividadeDto {
  @ApiProperty({ example: 'Enviar e-mail' })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Vc sabe como enviar um e-mail' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'alta', enum: ['baixa', 'media', 'alta'] })
  @IsEnum(['baixa', 'media', 'alta'])
  prioridade: 'baixa' | 'media' | 'alta';

  @ApiProperty({ example: true })
  @IsBoolean()
  notificar: boolean;

  @ApiProperty({ example: '2025-05-22' })
  @IsDateString()
  data_entrega: Date;

  @ApiProperty({ example: '2025-05-22T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  data_notificacao: string;

  @ApiProperty({ example: 'pendente', enum: ['pendente', 'concluida'] })
  @IsEnum(['pendente', 'concluida'])
  status: 'pendente' | 'concluida';

  @ApiProperty({
    example: 1,
    description: 'A tarefa pode ser atribuida a um contato',
  })
  @IsInt()
  @IsOptional()
  id_contato: number;
}
