import { Typography } from "@mui/material";
import React from "react";
import Head from "../helpers/Head";

const Page404 = () => {
  return (
    <React.Fragment>
      <Head title="404 page " description="This page is not found " />
      <Typography align="center" gutterBottom variant="h4" component="div" sx={{ mt: "50px" }}>
        Sorry, Page not found
      </Typography>
    </React.Fragment>
  );
};

export default Page404;
