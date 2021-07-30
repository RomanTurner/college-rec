import React from "react";
import Grid from "@material-ui/core/Grid";
import CollegeSelect from "./CollegeSelect";
import CollegePreview from "./CollegePreview";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    paddingTop: theme.spacing(2),
    width: "100%",
  },
  results: {
    backgroundColor: "#fafdff",
  },
}));

function College() {
  const classes = useStyles();
  const [results, setResults] = React.useState({ results: [] });

  return (
      <Grid container justify='center' className={classes.root} spacing={3}>
        <CollegeSelect setResults={setResults} />
        <Grid item xs={12}>
          <Typography gutterBottom align='center' variant='h4' component='h1'>
            Results
          </Typography>
        </Grid>
        <Grid
          container
          justify='center'
          className={classes.results}
          spacing={3}
        >
          <CollegePreview results={results} />
        </Grid>
      </Grid>
  );
}

export default College;
