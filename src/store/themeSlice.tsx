import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../types/types";

const initialState: ThemeState = {
  darkTheme: false,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
