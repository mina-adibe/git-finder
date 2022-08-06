import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/material";

const Loader = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress color="inherit" />
      </Box>
    </Container>
  );
};

export default Loader;
