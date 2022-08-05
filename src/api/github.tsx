import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users, ServerResponse, searchParams } from "../types/types";

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
        console.log("response", response.items);
        return { items: response.items, total_count: response.total_count };
      },
    }),
  }),
});
export const { useGetusersBySearchQuery } = githubApi;
// result type : Array<Users> (array of users )
// query args : string
