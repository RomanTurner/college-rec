import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import arronProfile from "./img/arronlee.jpeg";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "10px",
  },
  media: {
    height: 300,
    width: 300,
    margin: "auto",
  },
}));

export default function AaronProfile() {
  const classes = useStyles();
  const githubURL = "https://github.com/sciencelee";
  const linkedInURL = "https://www.linkedin.com/in/aaron-lee-data/";
  const profileURL = "http://www.sciencelee.com/index";

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={arronProfile}
          title='Profile Picture of Aaron Lee'
          aria-label="link to Arron Lee's gitHub profile"
          onClick={() => window.open(githubURL, "_blank")}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant='h5' component='h2'>
            Aaron Lee
          </Typography>
          <Typography align='center' variant='body1' component='p'>
            Creative and curious data scientist and engineer with a background
            as a military leader, STEM educator, and youth robotics.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography align='center' variant='subtitle1'>
        Find us on
      </Typography>
      <CardActions>
        <Grid container justify='center'>
          <IconButton
            color='primary'
            aria-label='link to gitHub profile'
            component='a'
            onClick={() => window.open(githubURL, "_blank")}
          >
            <GitHubIcon />
            <Typography variant='subtitle1'>GitHub</Typography>
          </IconButton>
          <IconButton
            color='primary'
            aria-label='link to linkedIn profile'
            component='a'
            onClick={() => window.open(linkedInURL, "_blank")}
          >
            <LinkedInIcon />
            <Typography variant='subtitle1'>LinkedIn</Typography>
          </IconButton>
          <IconButton
            color='primary'
            aria-label='link to portfolio'
            component='a'
            onClick={() => window.open(profileURL, "_blank")}
          >
            <AssignmentIndIcon />
            <Typography variant='subtitle1'>Portfolio</Typography>
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}
