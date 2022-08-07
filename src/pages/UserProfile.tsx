import React from "react";
import { useParams } from "react-router-dom";

import Head from "../helpers/Head";
import { Container, Typography, Box, Button, Link, Grid } from "@mui/material";
import { useGetuserProfileQuery } from "../api/github";
import Loader from "../components/loader/Loader";
const UserProfile = () => {
  const { username } = useParams();

  const { isFetching, isError, data } = useGetuserProfileQuery(username, {
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

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <React.Fragment>
      <Head title={`${name} user profile.`} description="your favourit users from search" />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box>
              <Box
                component="img"
                sx={{ borderRadius: "50%" }}
                src={`${avatar}`}
                alt={data?.login}
                loading="lazy"
                width="400px"
                height="400px"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "flex-start",
              }}>
              <Typography variant="h3" component="h1">
                Name :{name}
              </Typography>
              <Typography
                align="center"
                sx={{
                  pt: "10px",
                }}>
                Bio: {bio}
              </Typography>

              <Typography>blog :{blog}</Typography>
              <Typography>company :{company}</Typography>
              <Typography>email :{email}</Typography>
              <Typography>hireable :{hireable}</Typography>
              <Typography>location :{location}</Typography>
              <Typography>publicRepos :{publicRepos}</Typography>
              <Typography>twitter :{twitter}</Typography>
              <Typography>
                url :
                <Link href={url} underline="none" target="_blank" rel="noreferrer">
                  {url}
                </Link>
              </Typography>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Button variant="contained">Repos {data?.repos_url.length} </Button>
                <Button variant="contained">followers {followers}</Button>
                <Button variant="contained">following {following}</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UserProfile;
