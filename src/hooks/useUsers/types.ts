import { CreateUserDto } from "@/interfaces/create-user.dto";
import { UserEntity } from "@/interfaces/entities/user";

export interface UseUsersInterface {
  listOfUsers: UserEntity[];
  userSelected: UserEntity | null;
  getUsers: Function;
  setUserSelected: (user: UserEntity | null) => Promise<void>;
  saveUser: (
    isNewUser: boolean,
    payload: UserEntity | CreateUserDto,
    callback: () => void
  ) => Promise<void>;
  deleteUser: (idUser: number, callback: () => void) => Promise<void>;
}
