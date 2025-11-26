import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpresasModule } from './empresas/empresas.module';
import { ContatosModule } from './contatos/contatos.module';
import { AtividadesModule } from './atividades/atividades.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
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
      logging: true,
    }),
    AuthModule,
    UsuariosModule,
    EmpresasModule,
    ContatosModule,
    AtividadesModule,
  ],
})
export class AppModule {}
