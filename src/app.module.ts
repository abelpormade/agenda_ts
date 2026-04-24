import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AtividadesModule } from './modules/atividades/atividades.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContatosModule } from './modules/contatos/contatos.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'sua_chave_secreta_super_segura_aqui',

      signOptions: { expiresIn: '24h' },
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '9375',
      database: 'Type_agenda',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
    AuthModule,
    UsuariosModule,
    ContatosModule,
    AtividadesModule,
  ],
})
export class AppModule {}
