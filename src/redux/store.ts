import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/slice";
import topBarReducer from "@/redux/top-bar/slice";
import usersReducer from "@/redux/users/slice";
import loadingReducer from "@/redux/loading/slice";

const store = configureStore({
  reducer: {
    authReducer,
    topBarReducer,
    usersReducer,
    loadingReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
