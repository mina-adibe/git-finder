import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../api/github";
import themeReducer from "./themeSlice";
import bookmarkSlice from "./bookmarkSlice";
export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    theme: themeReducer,
    bookmark: bookmarkSlice,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
