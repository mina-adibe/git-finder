import { Box, Grid } from "@mui/material";
import React from "react";
import Loader from "../loader/Loader";
import UserCard from "../userCard/UserCard";

import { CardsProps } from "../../types/types";

const Cards = (props: CardsProps) => {
  const { isFetching, isError, data } = props;

  if (isFetching) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Loader />
      </Box>
    );
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  return (
    <React.Fragment>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data &&
          data.items.map((user) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={user.id}>
                <UserCard user={user} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};

export default Cards;
