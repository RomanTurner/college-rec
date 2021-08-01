import React from "react";
import Grid from "@material-ui/core/Grid";
import CollegeSelect from "./CollegeSelect";
import CollegePreview from "./CollegePreview";
import AaronProfile from "./AaronProfile";
import RomanProfile from "./RomanProfile";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    padding: "10px",
  },
  results: {
    width: "80vw",
    alignItems: "center",
  },
  rTitle: {
    paddingTop: "1rem",
  },
}));

function College() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [results, setResults] = React.useState({ results: [] });
  

  return (
    <Grid container justify='center' className={classes.root}>
      <CollegeSelect setResults={setResults} />
      <Grid item xs={12}>
        <div className={classes.rTitle}>
          <Typography gutterBottom align='center' variant='h4' component='h1'>
            Results
          </Typography>
        </div>
      </Grid>
      <Grid container justify='center' spacing={3} className={classes.results}>
        <CollegePreview results={results} />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.rTitle}>
          <Typography gutterBottom align='center' variant='h4' component='h1'>
            Creators
          </Typography>
        </div>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          container
          justify={matches ? "flex-end" : "center"}
          item
          xs={12}
          md={6}
        >
          <AaronProfile />
        </Grid>
        <Grid
          container
          justify={matches ? "flex-start" : "center"}
          item
          xs={12}
          md={6}
        >
          <RomanProfile />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default College;
