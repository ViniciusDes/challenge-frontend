import { UseAuthInterface } from "./types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { makeLogin } from "@/redux/auth/slice";
import { setIsLoading } from "@/redux/loading/slice";
import { sleep } from "@/utils";
import { UsersService } from "@/services/users.service";
import { toast } from "react-toastify";

export const useAuth = (): UseAuthInterface => {
  const usersService = new UsersService();

  const { isAuthenticated, userAuthenticatedData } = useSelector(
    (rootState: RootState) => rootState.authReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function validateLogin(email: string, password: string) {
    dispatch(setIsLoading(true));
    await sleep(1500);

    try {
      const [user] = await usersService.getUserByEmailAndPassword(
        email,
        password
      );

      if (!user) {
        toast.warn("Login inválido");
        return;
      }

      dispatch(
        makeLogin({
          email: user.email,
          userName: user.nome,
          role: user.tipoUsuario,
        })
      );

      return navigate("/users");
    } catch (error) {
      toast.error("Erro ao validar login");
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return {
    isAuthenticated: isAuthenticated,
    userAuthenticatedData: userAuthenticatedData,
    validateLogin: validateLogin,
  };
};
