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
import romanProfile from "./img/pp-square.png";
import TwitterIcon from "@material-ui/icons/Twitter";
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

export default function RomanProfile() {
  const classes = useStyles();
  const githubURL = "https://github.com/RomanTurner";
  const linkedInURL = "https://www.linkedin.com/in/roman-turner/";
  const twitterURL = "https://twitter.com/rmn_trnr";

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={romanProfile}
          title='Contemplative Reptile'
          onClick={() => window.open(githubURL, "_blank")}
        />
        <CardContent>
          <Typography align='center' gutterBottom variant='h5' component='h2'>
            Roman Turner
          </Typography>
          <Typography align='center' variant='body1' component='p'>
            JavaScript and Sushi Enthusiast with a soft spot for Ruby and Musubi
            🍱 Accessibility advocate with the desire to build tools for
            everyone.
          </Typography>
        </CardContent>
      </CardActionArea>
        <Typography align='center' variant='subtitle1'>Find us on</Typography>
      <CardActions>
        <Grid container justify='center'>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='a'
            onClick={() => window.open(githubURL, "_blank")}
          >
            <GitHubIcon />
            <Typography variant='subtitle1'>GitHub</Typography>
          </IconButton>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='a'
            onClick={() => window.open(linkedInURL, "_blank")}
          >
            <LinkedInIcon />
            <Typography variant='subtitle1'>LinkedIn</Typography>
          </IconButton>
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='a'
            onClick={() => window.open(twitterURL, "_blank")}
          >
            <TwitterIcon />
            <Typography variant='subtitle1'>Twitter</Typography>
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}
