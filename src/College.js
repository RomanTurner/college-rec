import React from 'react'
import Grid from "@material-ui/core/Grid";
import CollegeSelect from "./CollegeSelect";
import CollegePreview from "./CollegePreview";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function College() {
  const classes = useStyles();
  const [results, setResults] = React.useState({results: []});


      return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant='h2' component='h1'>
              Select Colleges
            </Typography>
            <Grid container justify='center' spacing={2}>
              <CollegeSelect setResults={setResults} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant='h2' component='h1'>
              Results :
            </Typography>
            <Grid container justify='center' spacing={2}>
              <CollegePreview results={results} />
            </Grid>
          </Grid>
        </Grid>
      );
}

export default College
