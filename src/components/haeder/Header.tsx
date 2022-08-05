import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import { toggleTheme } from "../../store/themeSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleTheme());
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <GitHubIcon />
            </Box>
            <Typography variant="h6" component="h1">
              Git Finder
            </Typography>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={theme.darkTheme} onChange={handleChange} />}
                label="Toggle Theme"
              />
            </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
