import { UseUsersInterface } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setListOfUsers,
  setUserSelected as setUserSelectedRedux,
} from "@/redux/users/slice";
import { UsersService } from "@/services/users.service";
import { setIsLoading } from "@/redux/loading/slice";
import { errorAlertMessage, sleep } from "@/utils";
import { UserEntity } from "@/interfaces/entities/user";
import { CreateUserDto } from "@/interfaces/create-user.dto";
import { toast } from "react-toastify";

export const useUsers = (): UseUsersInterface => {
  const usersService = new UsersService();
  const dispatch = useDispatch();
  const { listOfUsers, userSelected } = useSelector(
    (rootState: RootState) => rootState.usersReducer
  );

  const { valueInputSearch } = useSelector(
    (rootState: RootState) => rootState.topBarReducer
  );

  async function getUsers() {
    try {
      dispatch(setIsLoading(true));
      //somente para simular o loading de consumo de API
      await sleep(1000);

      const users = await usersService.getUsers(valueInputSearch);
      dispatch(setListOfUsers(users));
    } catch (error) {
      errorAlertMessage(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  async function saveUser(
    isNewUser: boolean,
    payload: UserEntity | CreateUserDto,
    callback: () => void
  ) {
    try {
      dispatch(setIsLoading(true));
      if (isNewUser) {
        await usersService.postUser(payload);
      } else {
        await usersService.putUser(payload as UserEntity);
      }
      toast.success("Usuário salvo com sucesso!");
      callback();
    } catch (error) {
      errorAlertMessage(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  async function deleteUser(idUser: number, callback: () => void) {
    try {
      if (!idUser) {
        return;
      }

      dispatch(setIsLoading(true));
      await usersService.deleteUser(idUser);
      toast.success("Usuário apagado com sucesso!");
      callback();
    } catch (error) {
      errorAlertMessage(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  async function setUserSelected(user: UserEntity | null) {
    dispatch(setUserSelectedRedux(user));
  }

  return {
    listOfUsers: listOfUsers,
    getUsers: getUsers,
    setUserSelected: setUserSelected,
    userSelected: userSelected,
    saveUser: saveUser,
    deleteUser: deleteUser,
  };
};
