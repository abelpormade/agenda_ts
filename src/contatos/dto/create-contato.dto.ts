import { IsString } from 'class-validator';

export class CreateContatoDto {

    @IsString()
    nome: string;
    
    @IsString()
    telefone: string;   

    @IsString()
    email: string;  

    @IsString()
    cargo: string;

    @IsString()
    observacoes: string;
}
