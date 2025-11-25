/* eslint-disable */
import { IsString, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {

  @ApiProperty({ example: 'Abel Felipe Zwierzykowski' })
  @IsString()
  @MinLength(3)
  nome: string;

  @ApiProperty({ example: 'AbelTeste@gmail.com' })
  @IsEmail({},{message: 'E-mail inválido, adicione um e-mail válido com @'})
  email: string;


  @ApiProperty({ example: '*********' })
  @IsString()
  @MinLength(6, {message: 'a Senha deve ter no mínimo 6 caracteres'})
  senha: string;

  @ApiProperty({ example: 'Trainee' })
  @IsString()
    cargo: string;
}

/* eslint-enable */
