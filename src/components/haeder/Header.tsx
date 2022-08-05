import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box>
            <GitHubIcon />
          </Box>
          <Typography variant="h6" component="h1">
            Git Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
