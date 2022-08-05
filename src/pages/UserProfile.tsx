import { TabsContext } from "@mui/base";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetuserProfileQuery } from "../api/github";

const UserProfile = () => {
  const { username } = useParams();
  //console.log("username", username);
  // TODO : PAGE RENDER 5 TIMES

  const { isFetching, isError, data, refetch } = useGetuserProfileQuery(username, {
    skip: username ? false : true,
  });
  const avatar = data?.avatar_url;
  const bio = data?.bio;
  const blog = data?.blog;
  const company = data?.company;
  const email = data?.email;
  const followers = data?.followers;
  const following = data?.following;
  const hireable = data?.hireable;
  const location = data?.location;
  const name = data?.name;
  const publicRepos = data?.public_repos;
  const twitter = data?.twitter_username;
  const url = data?.html_url;

  console.log("data-user", data);

  return (
    <React.Fragment>
      <Typography>bio :{bio}</Typography>
      <Typography>blog :{blog}</Typography>
      <Typography>company :{company}</Typography>
      <Typography>email :{email}</Typography>
      <Typography>followers :{followers}</Typography>
      <Typography>following :{following}</Typography>
      <Typography>hireable :{hireable}</Typography>
      <Typography>location :{location}</Typography>
      <Typography>publicRepos :{publicRepos}</Typography>
      <Typography>name :{name}</Typography>
      <Typography>twitter :{twitter}</Typography>
      <Typography>url :{url}</Typography>
    </React.Fragment>
  );
};

export default UserProfile;

// created_at: "2015-09-16T00:37:51Z";
// events_url: "https://api.github.com/users/lucaslattari/events{/privacy}";

// followers_url: "https://api.github.com/users/lucaslattari/followers";
// following_url: "https://api.github.com/users/lucaslattari/following{/other_user}";

// gists_url: "https://api.github.com/users/lucaslattari/gists{/gist_id}";

// html_url: "https://github.com/lucaslattari";
// id: 14303710;

// organizations_url: "https://api.github.com/users/lucaslattari/orgs";

// received_events_url: "https://api.github.com/users/lucaslattari/received_events";
// repos_url: "https://api.github.com/users/lucaslattari/repos";

// starred_url: "https://api.github.com/users/lucaslattari/starred{/owner}{/repo}";
// subscriptions_url: "https://api.github.com/users/lucaslattari/subscriptions";
