import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loader;
