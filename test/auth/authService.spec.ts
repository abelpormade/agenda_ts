/*import { AuthService } from '../../src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from '../../src/usuarios/usuario.entity';
import * as bcrypt from 'bcrypt';

// Mock do bcrypt
jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

// Mock do repositório tipado
const mockUsuarioRepository = (): jest.Mocked<Repository<Usuario>> =>
  ({
    findOne: jest.fn(),
  } as any);

// Mock do JwtService tipado
const mockJwtService = (): jest.Mocked<JwtService> =>
  ({
    sign: jest.fn().mockReturnValue('token_falso'),
  } as any);

describe('AuthService - login', () => {
  let authService: AuthService;
  let usuarioRepository: jest.Mocked<Repository<Usuario>>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(() => {
    usuarioRepository = mockUsuarioRepository();
    jwtService = mockJwtService();

    authService = new AuthService(jwtService, usuarioRepository);
  });

  it('deve realizar login com sucesso', async () => {
    const usuarioMock = {
      id_usuario: 1,
      nome: 'Abel',
      email: 'abel@mail.com',
      senha: 'hash_senha',
      cargo: 'Trainee',
    } as Usuario;

    usuarioRepository.findOne.mockResolvedValue(usuarioMock);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const result = await authService.login({
      email: 'abel@mail.com',
      senha: '123123123',
    });

    expect(usuarioRepository.findOne).toHaveBeenCalledWith({
      where: { email: 'abel@mail.com' },
    });

    expect(result.access_token).toBe('token_falso');
    expect(result.usuario.email).toBe('abel@mail.com');
  });

  it('deve lançar erro quando o email não existe', async () => {
    usuarioRepository.findOne.mockResolvedValue(null);

    await expect(
      authService.login({ email: 'naoexiste@mail.com', senha: 'aaa' }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('deve lançar erro quando a senha está incorreta', async () => {
    const usuarioMock = {
      id_usuario: 1,
      email: 'abel@mail.com',
      senha: 'hash',
    } as Usuario;

    usuarioRepository.findOne.mockResolvedValue(usuarioMock);
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await expect(
      authService.login({ email: 'abel@mail.com', senha: 'errada' }),
    ).rejects.toThrow(UnauthorizedException);
  });
});
*/
