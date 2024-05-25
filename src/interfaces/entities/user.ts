export interface UserEntity {
  id: number;
  nome: string;
  sobrenome: string;
  tipoUsuario: string;
  email: string;
  senha: string;
  ativo: boolean;
}
