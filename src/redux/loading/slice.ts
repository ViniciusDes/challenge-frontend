import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingData, SetIsLoading } from "./types";

const initialState: LoadingData = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<SetIsLoading>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
