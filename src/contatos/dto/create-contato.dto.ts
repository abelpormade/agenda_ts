import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContatoDto {

   
    @ApiProperty({example:"Maria do RH"})
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({example:"42999455387"})
    @IsString()
    @IsNotEmpty()
    telefone: string;   

    @ApiProperty({example:"MariaRh@Gmail.com"})
    @IsString()
    @IsNotEmpty()
    email: string;  

    @ApiProperty({example:"Gestora"})
    @IsString()
    @IsNotEmpty()
    cargo: string;

    @ApiProperty({example:"RH"})
    @IsString()
    setor: string;

    @ApiProperty({example:"entrar em contato diariamente"})
    @IsString()
    @IsNotEmpty()
    observacoes: string;

 @ApiProperty({example:1})
    @IsInt()
    @IsNotEmpty()
    usuario_Id:number;


    @ApiProperty({example:1})
    @IsInt()
    @IsNotEmpty()
    empresa_Id:number;
}
