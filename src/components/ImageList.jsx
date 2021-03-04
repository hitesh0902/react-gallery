import React from "react";
import ImageCard from "./ImageCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  text: {
    width: "100%",
  },
}));

const ImageList = ({ list, handleOpenModal, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} style={{ marginTop: 30 }}>
        {list ? (
          list.map(({ id, urls, user, likes }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <ImageCard
                id={id}
                image={urls.small}
                user={user}
                likes={likes}
                handleOpenModal={handleOpenModal}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h4" align="center" className={classes.text}>
            Try To Search Something Like "Dogs" or "Cats"
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ImageList;
