import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    marginRight: 15,
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  icon: {
    marginRight: 5,
    color: theme.palette.text.secondary,
  },
}));

const ImageCard = ({ id, image, user, likes, handleOpenModal }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleOpenModal(id)}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar
              src={user.profile_image.medium}
              className={classes.avatar}
            />
            <div>
              <Typography variant="subtitle1">{user.name}</Typography>
              <Box display="flex" alignItems="center">
                <ThumbUpIcon className={classes.icon} />
                <Typography variant="subtitle2">{likes}</Typography>
              </Box>
            </div>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
