import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SetInputSearch, TopBarData } from "./types";

const initialState: TopBarData = {
  valueInputSearch: "",
};

const topBarSlice = createSlice({
  name: "top-bar",
  initialState,
  reducers: {
    setValueInputSearch(state, action: PayloadAction<SetInputSearch>) {
      state.valueInputSearch = action.payload.value;
    },
  },
});

export const { setValueInputSearch } = topBarSlice.actions;
export default topBarSlice.reducer;
