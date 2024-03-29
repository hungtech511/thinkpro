import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHomePage } from "../actions/getHome";

type HomePageState = {
  data: any;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
};

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
} as HomePageState;

export const homepage = createSlice({
  name: "home-page",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePage.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getHomePage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
      }),
      builder.addCase(getHomePage.rejected, (state:any, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default homepage.reducer;
