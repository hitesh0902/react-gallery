import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    maxWidth: 720,
    width: "100%",
    margin: "0 2%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  icon: {
    marginRight: 5,
    color: theme.palette.text.secondary,
  },
}));

const ImageModal = ({ image, open, close }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ outline: 0 }}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={image.urls.regular} />
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div>
                  <Box display="flex" alignItems="center">
                    <PersonIcon className={classes.icon} />
                    <Typography variant="subtitle2">
                      {image.user.name}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    style={{ marginBottom: 5 }}
                  >
                    <ThumbUpIcon className={classes.icon} />
                    <Typography variant="subtitle2" color="textSecondary">
                      {image.likes}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <CalendarTodayIcon className={classes.icon} />
                    <Typography variant="body2" color="textPrimary">
                      {new Date(image.created_at).toDateString()}
                    </Typography>
                  </Box>
                </div>
                <div>
                  {image.user.twitter_username && (
                    <Box display="flex" alignItems="center">
                      <TwitterIcon className={classes.icon} />
                      <Typography variant="body2" color="textPrimary">
                        {image.user.twitter_username}
                      </Typography>
                    </Box>
                  )}
                  {image.user.instagram_username && (
                    <Box display="flex" alignItems="center">
                      <InstagramIcon className={classes.icon} />
                      <Typography variant="body2" color="textPrimary">
                        {image.user.instagram_username}
                      </Typography>
                    </Box>
                  )}
                </div>
              </Box>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageModal;
