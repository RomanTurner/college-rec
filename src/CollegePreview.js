import React from "react";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import fallbackImg from "./img/placeholder-img.png";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LanguageIcon from "@material-ui/icons/Language";
import CardContent from "@material-ui/core/CardContent";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import CircularProgress from "@material-ui/core/CircularProgress";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "300px",
    width: "100%",
  },
  image: {
    maxWidth: "300px",
    minWidth: "300px",
    width: "100%",
  },
  details: {
    paddingLeft: '10px',
    width: '80vw'
  },
  loading: {
    justifySelf: 'center'
  }
}));

export default function CollegePreview({ results }) {
  const classes = useStyles();
  if (!results) {
    return (                 
      <Grid container justify='center'>                
        <CircularProgress />
      </Grid>
    );
  }
  const checked = results.results.length > 0

  const content = results.results.map((college) => {
  
    let {
      stabbr,
      admission_rate,
      avg_tuition,
      city,
      schoolname,
      student_pop,
      url,
      id,
      image,
      description
    } = college;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
    
  const adminRate = Math.floor(admission_rate * 100);

    return (
      <Grow
        in={results}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 2000 } : {})}
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
                        Location: {`${city}, ${stabbr}`}
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
                        Admision Rate : {adminRate}%
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
                        Average Tuition Cost : {formatter.format(avg_tuition)}
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
                  <Grid container spacing={1} xs={12}>
                    <Grid item={12}>
                      <Typography
                        key={id}
                        variant='body1'
                        color='textSecondary'
                        component='p'
                      >
                        {description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
            <CardMedia
              className={classes.image}
              image={image}
              title={`image of ${schoolname} campus`}
            />
          </Card>
        </Grid>
      </Grow>
    );
  });

  return content;
}
