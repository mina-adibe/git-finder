import React from "react";
import { Box } from "@mui/material";
import Header from "../haeder/Header";

type Props = {
  children: JSX.Element;
};

const Layout = (props: Props) => (
  <React.Fragment>
    <Box
      sx={{
        padding: "20px",
        marginTop: "63px",
      }}>
      <Header />

      {props.children}
    </Box>
  </React.Fragment>
);
export default Layout;
