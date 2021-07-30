import React from "react";
import Grid from "@material-ui/core/Grid";
import CollegeSelect from "./CollegeSelect";
import CollegePreview from "./CollegePreview";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    padding: "10px",
  },
  results: {
    width: "80vw",
  },
  rTitle: {
    paddingTop: '1rem'
  }
}));

function College() {
  const classes = useStyles();
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
      <Grid container spacing={3} className={classes.results}>
        <CollegePreview results={results} />
      </Grid>
    </Grid>
  );
}

export default College;
