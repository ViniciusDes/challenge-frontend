export interface CreateUserDto {
  nome: string;
  sobrenome: string;
  tipoUsuario: string;
  email: string;
  senha: string;
  ativo: boolean;
}
