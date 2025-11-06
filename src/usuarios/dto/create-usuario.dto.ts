/* eslint-disable */
import { IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(3)
  nome: string;

  @IsEmail({},{message: 'E-mail inválido, adicione um e-mail válido com @'})
  email: string;

  @IsString()
  @MinLength(6, {message: 'a Senha deve ter no mínimo 6 caracteres'})
  senha: string;

  @IsString()
    cargo: string;
}

/* eslint-enable */
