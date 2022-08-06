import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";

import { UserCartProps } from "../../types/types";
import { Box, CardActionArea } from "@mui/material";
import { Link as RRLink } from "react-router-dom";
import { BookmarkUser } from "../../store/bookmarkSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import Link from "@mui/material/Link";

const UserCard = ({ user, isBookmarkPage }: UserCartProps) => {
  const dispatch = useAppDispatch();

  const { avatar_url } = user;
  const loginName = user.login;
  const followers = user.followers_url?.length;
  const following = user.following_url?.length;
  const githubLink = user.html_url;
  const reposCount = user.repos_url?.length;

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" alt="green iguana" height="150" image={avatar_url} />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {loginName}
          </Typography>

          <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <PeopleAltIcon />
              <Typography variant="body2" color="text.secondary">
                followers {followers}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                following {following}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <GitHubIcon />
              <Typography variant="body2" color="text.secondary">
                Repos: {reposCount}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <LaunchTwoToneIcon />
              <Typography variant="body2" color="text.secondary">
                <Link href={githubLink} underline="none" target="_blank" rel="noreferrer">
                  {githubLink}
                </Link>
              </Typography>
            </Box>
          </Box>
        </CardContent>

        <CardActions>
          <Button size="small" component={RRLink} to={`/user/${loginName}`}>
            <UnfoldMoreIcon />
            More
          </Button>
          {!isBookmarkPage && (
            <Button size="small" onClick={() => dispatch(BookmarkUser(user))}>
              <BookmarkAddTwoToneIcon /> Bookmark
            </Button>
          )}
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
