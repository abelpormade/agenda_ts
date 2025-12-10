/*import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Testando Rotas (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /usuarios - deve criar um usuário', async () => {
    const dto = {
      nome: 'João da Silvaaaa',
      email: 'joaoaiaa@email.com',
      senha: '12345aaa6',
      cargo: 'traaain',
    };

    const resposta = await request(app.getHttpServer())
      .post('/usuarios')
      .send(dto)
      .expect(201);

    expect(resposta.body.id_usuario).toBeDefined();
    expect(resposta.body.nome).toBe(dto.nome);
  });

  it('GET /usuarios - deve listar usuários', async () => {
    const resposta = await request(app.getHttpServer())
      .get('/usuarios')
      .expect(200);

    expect(Array.isArray(resposta.body)).toBe(true);
  });
}); */
