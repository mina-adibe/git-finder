import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Loader from "../loader/Loader";
import UserCard from "../userCard/UserCard";

import { CardsProps } from "../../types/types";

const Cards = (props: CardsProps) => {
  const { isFetching, isError, data } = props;

  if (isFetching) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  return (
    <Container
      sx={{
        my: "40px",
        p: "15px",
      }}>
      {!data && (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/assets/Home-img.svg" alt="React Logo" />
        </Box>
      )}
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data &&
            data.items.map((user) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard user={user} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Cards;
