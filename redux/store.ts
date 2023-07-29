import { configureStore } from "@reduxjs/toolkit";
import homepage from "./features/homeSlice";

export const store = configureStore({
  reducer: {
    homepage:homepage,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
