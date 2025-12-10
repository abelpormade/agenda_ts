import { EmpresasService } from '../../src/empresas/empresas.service';
import { Empresa } from '../../src/empresas/empresa.entity';
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('EmpresasService - criação', () => {
  let service: EmpresasService;
  let repo: Repository<Empresa>;

  const mockRepo = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmpresasService,
        {
          provide: getRepositoryToken(Empresa),
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<EmpresasService>(EmpresasService);
    repo = module.get<Repository<Empresa>>(getRepositoryToken(Empresa));
  });

  it('Deve criar uma nova empresa', async () => {
    const dadosPost = {
      id_empresa: 2,
      nome: 'Pormade',
      endereco: 'União da Vitória',
      ramo_atuacao: '17823423423',
      telefone: '42999455387',
    };

    mockRepo.create.mockReturnValue(dadosPost);

    mockRepo.save.mockResolvedValue({
      ...dadosPost,
      criado_em: new Date(),
      atualizado_em: new Date(),
    });

    const resultado = await service.create(dadosPost);

    expect(repo.create).toHaveBeenCalledWith(dadosPost);
    expect(repo.save).toHaveBeenCalled();
    expect(resultado.nome).toBe('Pormade');
  });
});
