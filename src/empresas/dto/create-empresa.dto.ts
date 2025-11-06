import { IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  nome: string;

  @IsString()
  endereco: string;

  @IsString()
  setor_atuacao: string;

  @IsString()
  telefone: string;
}
