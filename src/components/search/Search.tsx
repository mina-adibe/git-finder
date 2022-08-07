import React from "react";
import { Box } from "@mui/system";
import { Container, IconButton, InputBase, InputLabel, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import { SearchProps } from "../../types/types";

const Search = ({ handleChange, searchTerm }: SearchProps) => {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <Paper
            component="div"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "70%",
              my: "20px",
              mx: "auto",
            }}>
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <PersonSearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search github users"
              onChange={handleChange}
              name="search"
              inputProps={{ "aria-label": "Search github users" }}
            />

            <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="per-page-label">per page</InputLabel>
              <Select
                value={searchTerm.per_page}
                name="per_page"
                onChange={handleChange}
                displayEmpty
                labelId="per-page-label"
                label="per page"
                inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="sort-label">Sort by</InputLabel>
              <Select
                value={searchTerm.sort}
                name="sort"
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                label="Sort by"
                labelId="sort-label">
                <MenuItem value="followers">followers</MenuItem>
                <MenuItem value="repositories">repositories</MenuItem>
                <MenuItem value="joined">joined</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Search;
