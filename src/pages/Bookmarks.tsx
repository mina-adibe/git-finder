import { Box, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import UserCard from "../components/userCard/UserCard";
import { useAppSelector } from "../hooks/useAppSelector";

const Bookmarks = () => {
  const bookmarksUsers = useAppSelector((state) => state.bookmark);
  console.log("bookmarksUsers", bookmarksUsers);

  const { pathname } = useLocation();
  console.log(pathname);

  const isBookmarkPage = pathname === "/Bookmarks" ? true : false;
  console.log("isBookmarkPage", isBookmarkPage);

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "80vw",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          my: "40px",
          p: "15px",
        }}>
        {!bookmarksUsers && (
          <Box>
            <img src="/assets/Home-img.svg" alt="React Logo" />
          </Box>
        )}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {bookmarksUsers &&
            bookmarksUsers.map((user) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard user={user} isBookmarkPage={isBookmarkPage} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Bookmarks;
