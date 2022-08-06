import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  Badge,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../../store/themeSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const bookmark = useAppSelector((state) => state.bookmark);

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

            <Typography
              component={NavLink}
              color="#fff"
              sx={{
                flexGrow: 1,
                fontFamily: "Poppins",
                textDecoration: "none",
              }}
              to="/">
              Git Finder
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button color="inherit" component={NavLink} to="/Bookmarks">
              <Badge badgeContent={bookmark.length} color="success" sx={{ mx: "10px" }}>
                <BookmarkIcon />
              </Badge>
              Bookmarks users
            </Button>
            <FormGroup>
              <FormControlLabel
                label="Light/Dark"
                control={<Switch checked={theme.darkTheme} onChange={handleChange} />}
              />
            </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
