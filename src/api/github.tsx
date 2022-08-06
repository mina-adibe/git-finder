import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users, ServerResponse, searchParams, UserProfile } from "../types/types";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getusersBySearch: builder.query<ServerResponse<Users>, searchParams>({
      query: ({ search, sort, per_page, page }) => ({
        url: "search/users",
        params: {
          q: search,
          sort,
          per_page,
          page,
        },
      }),
      transformResponse: (response: ServerResponse<Users>) => {
        return { items: response.items, total_count: response.total_count };
      },
    }),
    getuserProfile: builder.query<UserProfile, string | undefined>({
      query: (username: string) => ({
        url: `users/${username}`,
      }),
    }),
  }),
});
export const { useGetusersBySearchQuery, useGetuserProfileQuery } = githubApi;
// result type : Array<Users> (array of users )
// query args : string
