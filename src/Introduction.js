import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  intro: {
    padding: "10px",
  },
  content: {
    border: '5px',
    borderColor: theme.palette.primary.main,
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'underlined'
  }
})); 

function Introduction() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography align='center' display='block' variant='h5' gutterBottom>
          Welcome to CollegeReco, the higher-education recommendation site.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.content}>
          <Typography gutterBottom color='primary' variant='h6'>
            About Us
          </Typography>
          <Divider />
          <Typography display='block' variant='body1' gutterBottom>
            We created a tool to help those in search of their next step in
            education. There are a lot of options out there! Most prospective
            students are only familiar with a few institutions, this tool will
            help introduce more.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className={classes.content}>
          <Typography gutterBottom color='primary' variant='h6'>
            How It Works
          </Typography>
          <Divider />
          <Typography display='block' variant='body1' gutterBottom>
            The backend features a content based recommendation system that
            determines closest matches using 40+ weighted features from the
            <Link
              rel='noreferrer'
              target='_blank'
              href='https://collegescorecard.ed.gov/'
            >
              {" "}
              Department of Education's College Scorecard.
            </Link>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.content}>
          <Typography gutterBottom color='primary' variant='h6'>
            How To Use
          </Typography>
          <Divider />
          <Typography display='block' variant='body1' gutterBottom>
            Select a Reach, Target, and Safety School from our list of over 2000
            institutions and click 'Submit'. Take advantage of the search text
            field if you know the names, or play around with random schools.
            Abbreviation will not work on for the search function.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Introduction;
