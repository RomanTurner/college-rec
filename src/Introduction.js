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
  const preventDefault = (event) => event.preventDefault();
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
            We wanted to provide a tool to help those in search for their next
            step in education. Most people are limited in picking the right
            university, or college for themselves because there hasn't been a
            way to see what which colleges are the best for you.
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
              href='https://collegescorecard.ed.gov/'
              onClick={preventDefault}
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
            It is simple to use, just select from over 2000 availible colleges
            and universities and hit 'Submit'. The machine will do all the heavy
            lifting and return the results in the section below.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Introduction;
