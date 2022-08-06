import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types/types";

const initialState: Users[] = [
  {
    login: "mina",
    id: 903765,
    node_id: "MDQ6VXNlcjkwMzc2NQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/903765?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mina",
    html_url: "https://github.com/mina",
    followers_url: "https://api.github.com/users/mina/followers",
    following_url: "https://api.github.com/users/mina/following{/other_user}",
    gists_url: "https://api.github.com/users/mina/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mina/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mina/subscriptions",
    organizations_url: "https://api.github.com/users/mina/orgs",
    repos_url: "https://api.github.com/users/mina/repos",
    events_url: "https://api.github.com/users/mina/events{/privacy}",
    received_events_url: "https://api.github.com/users/mina/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "minamarkham",
    id: 876210,
    node_id: "MDQ6VXNlcjg3NjIxMA==",
    avatar_url: "https://avatars.githubusercontent.com/u/876210?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/minamarkham",
    html_url: "https://github.com/minamarkham",
    followers_url: "https://api.github.com/users/minamarkham/followers",
    following_url: "https://api.github.com/users/minamarkham/following{/other_user}",
    gists_url: "https://api.github.com/users/minamarkham/gists{/gist_id}",
    starred_url: "https://api.github.com/users/minamarkham/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/minamarkham/subscriptions",
    organizations_url: "https://api.github.com/users/minamarkham/orgs",
    repos_url: "https://api.github.com/users/minamarkham/repos",
    events_url: "https://api.github.com/users/minamarkham/events{/privacy}",
    received_events_url: "https://api.github.com/users/minamarkham/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

const { reducer } = usersSlice;
export default reducer;

// Asynchronous thunk action
// export function fetchRecipes() {
//   return async (dispatch) => {
//     dispatch(getRecipes());

//     try {
//       const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
//       const data = await response.json();

//       dispatch(getRecipesSuccess(data.meals));
//     } catch (error) {
//       dispatch(getRecipesFailure());
//     }
//   };
// }
