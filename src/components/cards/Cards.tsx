import { Grid } from "@mui/material";
import React from "react";
import { CardsProps } from "../../types/types";
import UserCard from "../userCard/UserCard";

const Cards = (props: CardsProps) => {
  const { isFetching, isError, data } = props;

  if (isFetching) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }
  return (
    <div>
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
    </div>
  );
};

export default Cards;
