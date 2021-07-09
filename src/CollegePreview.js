import React from "react";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    padding: theme.spacing(6),
  },
  media: {
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function CollegePreview({ results }) {
  const classes = useStyles();
  if (!results) {
    return <div>No Results</div>;
  }
  console.log(results.results)

  const content = results.results.map((college) => {
    const {
      admission_rate,
      avg_tuition,
      city,
      schoolname,
      state,
      student_pop,
      url,
      id,
    } = college;

    return (
      <Grow
        in={results}
        style={{ transformOrigin: '0 0 0' }}
          {...(results.results.length > 0 ? { timeout: 1000 } : {})}>
        <Grid item>
          <Card className={classes} key={id}>
            <CardContent key={id}>
              <Typography key={id} gutterBottom variant='h5' component='h2'>
                {schoolname}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College Location State : {state}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College Location City : {city}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College Admision Rate : {admission_rate}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College Average Tuition Cost : {avg_tuition}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College Student Population : {student_pop}
              </Typography>
              <Typography
                key={id}
                variant='body1'
                color='textSecondary'
                component='p'
              >
                College URL : {url}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    );
  });

  return content;
}
