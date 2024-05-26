import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Api } from "./api.service";
import { UserEntity } from "@/interfaces/entities/user";
import { CreateUserDto } from "@/interfaces/create-user.dto";

export class UsersService {
  private api: AxiosInstance;

  constructor() {
    this.api = Api();
  }

  async getUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserEntity[]> {
    const user = (await axios.get(`/usuarios?email=${email}&senha=${password}`))
      .data;

    return user;
  }

  async getUsers(name: string): Promise<UserEntity[]> {
    return (await this.api.get(`/usuarios?nome_like=${name}`)).data;
  }

  async postUser(user: CreateUserDto): Promise<AxiosResponse> {
    const [userWithTheSameEmail] = (
      await this.api.get(`usuarios?email=${user.email}`)
    ).data;

    if (userWithTheSameEmail) {
      throw new Error("Já existe usuário com mesmo e-mail, verifique");
    }

    return await this.api.post(`/usuarios`, user);
  }

  async putUser(user: UserEntity): Promise<AxiosResponse> {
    return await this.api.put(`/usuarios/${user.id}`, user);
  }

  async deleteUser(id: number): Promise<AxiosResponse> {
    return await this.api.delete(`/usuarios/${id}`);
  }
}
