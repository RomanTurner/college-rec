import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import Introductions from "./Introduction";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#fff",
  },
  paperOn: {
    color: "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    width: '50vw'
  }
}));

function CollegeSelect({ setResults }) {
  const names = Object.values(nameList);
  const classes = useStyles();
  const [reach, setReach] = React.useState(names[2001]);
  const [target, setTarget] = React.useState(names[2001]);
  const [safety, setSafety] = React.useState(names[2001]);

  const isSelected = (college) =>
    college === "Select a University" || college === null;

  const canSubmit = () => {
    return isSelected(reach) || isSelected(safety) || isSelected(target);
  };

  const handleClick = () => {
    setResults("");
    const selectResults = [
      {
        dream:reach,
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Introductions />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(reach) ? classes.paper : classes.paperOn}>
          <Typography variant='h6'>Reach</Typography>
          <AutocompleteTextField college={reach} callback={setReach} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(target) ? classes.paper : classes.paperOn}>
          <Typography variant='h6'>Target</Typography>
          <AutocompleteTextField college={target} callback={setTarget} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={isSelected(safety) ? classes.paper : classes.paperOn}>
          <Typography variant='h6'>Safety</Typography>
          <AutocompleteTextField college={safety} callback={setSafety} />
        </Paper>
      </Grid>
      <Grid item xs={12} container justify='center'>
        <Button
          disabled={canSubmit()}
          onClick={() => handleClick()}
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default CollegeSelect;
