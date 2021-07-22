import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
}));

function CollegeSelect({ setResults, activeStep, steps }) {
  const names = Object.values(nameList);
  const classes = useStyles();

  const [dream, setDream] = React.useState(names[345]);
  const [target, setTarget] = React.useState(names[10]);
  const [safety, setSafety] = React.useState(names[123]);

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
      <Grid item xs={12} sm={4}>
        <AutocompleteTextField college={dream} callback={setDream} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <AutocompleteTextField college={target} callback={setTarget} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <AutocompleteTextField college={safety} callback={setSafety} />
      </Grid>
      <Grid item xs={12} container justify='center'>
        <Button
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
