import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../types/types";

const initialState: Users[] = [];
export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    BookmarkUser: (state, action: PayloadAction<Users>) => {
      state.push(action.payload);
    },
  },
});

export const { BookmarkUser } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
