import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SetListOfUsers, SetUserSelected, UsersData } from "./types";

const initialState: UsersData = {
  listOfUsers: [],
  userSelected: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setListOfUsers(state, action: PayloadAction<SetListOfUsers>) {
      console.log("action", action.payload);
      state.listOfUsers = action.payload;
    },

    setUserSelected(state, action: PayloadAction<SetUserSelected>) {
      state.userSelected = action.payload;
    },
  },
});

export const { setListOfUsers, setUserSelected } = usersSlice.actions;
export default usersSlice.reducer;
