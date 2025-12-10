import { describe, expect, it } from '@jest/globals';
import { Usuario } from '../../src/usuarios/usuario.entity';

describe('Aqui serão feitos os testes de usuario', () => {
  const objetoUsuario = {
    nome: 'Abel Felipe',
    email: 'Abelill@gmail.com',
    senha: '$2b$10$EijLqrUIG/xzB73u7XcwNuZ/UDCgRJRmhFcYOzY.Scm7q63GAJlf2',
  };

  it('Testando cadastro de usuario', () => {
    const usuario = new Usuario();
    Object.assign(usuario, objetoUsuario);

    expect(usuario).toEqual(expect.objectContaining(objetoUsuario));
  });
  let mockRepo: any;

  beforeEach(() => {
    mockRepo = {
      create: jest.fn().mockImplementation((data) => data),
      save: jest.fn().mockImplementation((data) => ({
        id_usuario: 1,
        criado_em: new Date(),
        ...data,
      })),
    };
  });
  it('Deve salvar usuário no BD', async () => {
    const usuarioCriado = mockRepo.create(objetoUsuario);
    const usuarioSalvo = await mockRepo.save(usuarioCriado);

    expect(usuarioSalvo.nome).toBe(objetoUsuario.nome);
  });
});
