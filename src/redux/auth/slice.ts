import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthData } from "./types";
import { MakeLoginPayload } from "@/hooks/useAuth/types";
import { KindOfUser } from "@/interfaces/kindOfUser.enum";

const initialState: AuthData = {
  isAuthenticated: false,
  userAuthenticatedData: {
    email: "",
    role: "",
    userName: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    makeLogin(state, action: PayloadAction<MakeLoginPayload>) {
      state.userAuthenticatedData = {
        ...action.payload,
        role: action.payload.role.toUpperCase().includes("USUÁRIO PADRÃO")
          ? KindOfUser.default
          : KindOfUser.admin,
      };
      state.isAuthenticated = true;
    },
  },
});

export const { makeLogin } = authSlice.actions;
export default authSlice.reducer;
