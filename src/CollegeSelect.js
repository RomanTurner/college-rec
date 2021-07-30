import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Instructions from "./Instructions";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";

const useStyles = makeStyles((theme, isSelected) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#fff",
  },
  paperOn: {
    padding: theme.spacing(2),
    textAlign: "center",
    background:
      "linear-gradient(146deg, rgba(255,255,255,1) 0%, rgba(26,92,187,1) 0%, rgba(255,255,255,1) 100%);",
  },
  intro: {
    padding: "5rem",
    margin: "5rem",
    textAlign: "center",
  },
}));

function CollegeSelect({ setResults }) {
  const names = Object.values(nameList);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [dream, setDream] = React.useState(names[2001]);
  const [target, setTarget] = React.useState(names[2001]);
  const [safety, setSafety] = React.useState(names[2001]);

  const isSelected = (college) => college === "Select a University";

  const canSubmit = () => {
    return isSelected(dream) || isSelected(safety) || isSelected(target);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    setResults("");
    const selectResults = [
      {
        dream,
        target,
        safety,
      },
    ];

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(selectResults),
    };

    getResults(configObj);
  };

  const getResults = async (configObj) => {
    try {
      const response = await fetch(
        "https://college-rec-system.herokuapp.com/model/",
        configObj
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.intro}>
          <Typography display='block' variant='h5' gutterBottom>
            Welcome to College Reco, the college recommendation site.
          </Typography>
          <Typography display='block' variant='subtitle2' gutterBottom>
            We wanted to provide a tool to help those in search for their next
            step in education. Most people are limited in picking the right
            university, or college for themselves because there hasn't been a
            way to see what which colleges are the best for you.
          </Typography>
          <Typography display='block' variant='subtitle2' gutterBottom>
            We wanted to change that. We trained a machine with a reccomendation
            algorithm that compares a thousand features for each college and
            recommends the best university to you based off of your Dream,
            Target, and Safety choices.
          </Typography>
          <Typography display='block' variant='subtitle2' gutterBottom>
            It is simple to use, just select from over 2000 availible colleges
            and universities and hit 'Submit'. The machine will do all the heavy
            lifting and return the results in the section below.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Instructions activeStep={activeStep} setActiveStep={setActiveStep} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(dream) ? classes.paper : classes.paperOn}>
          <Typography gutterBottom>Dream</Typography>
          <AutocompleteTextField college={dream} callback={setDream} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(target) ? classes.paper : classes.paperOn}>
          <Typography gutterBottom>Target</Typography>
          <AutocompleteTextField college={target} callback={setTarget} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(safety) ? classes.paper : classes.paperOn}>
          <Typography gutterBottom>Safety</Typography>
          <AutocompleteTextField college={safety} callback={setSafety} />
        </Paper>
      </Grid>
      <Grid item xs={12} container justify='center'>
        <Button
          disabled={canSubmit()}
          onClick={() => handleClick()}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default CollegeSelect;
