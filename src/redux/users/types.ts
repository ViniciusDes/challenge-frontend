import { UserEntity } from "@/interfaces/entities/user";

export interface UsersData {
  listOfUsers: UserEntity[];
  userSelected: UserEntity | null;
}

export type SetListOfUsers = UserEntity[];

export type SetUserSelected = UserEntity | null;
