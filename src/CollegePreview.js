import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import imgSrc from "./img/placeholder-img.png";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LanguageIcon from "@material-ui/icons/Language";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: '250px',
    width: '750px'
  },
  content: {
    flex: "1 0 1",
  },
  cover: {
    width: '100%',
  },
}));

export default function CollegePreview({ results }) {
  const classes = useStyles();
  if (!results) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  const checked = results.results.length > 0

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
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Grid item xs={12}>
          <Card className={classes.root} key={id}>
            <div className={classes.details}>
              <CardContent key={id}>
                <Typography key={id} gutterBottom variant='h5' component='h2'>
                  {schoolname}
                </Typography>
                <Grid container spacing={1} xs={12}>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <LocationCityIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Location: {`${state} ${city}`}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <GroupAddIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Admision Rate : {admission_rate}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item>
                      <MonetizationOnIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Average Tuition Cost : {avg_tuition}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item={4}>
                      <PeopleOutlineIcon />
                    </Grid>
                    <Grid item={8}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        Student Population : {student_pop}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} xs={12}>
                    <Grid item={4}>
                      <LanguageIcon />
                    </Grid>
                    <Grid item={8}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='a'
                        href={url}
                      >
                        Website : {url}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image={imgSrc}
              title='Live from space album cover'
            />
          </Card>
        </Grid>
      </Grow>
    );
  });

  return content;
}
