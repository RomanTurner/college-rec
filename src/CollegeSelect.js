import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    display: "flex",
    justifyContent: "center",
  },
}));

function CollegeSelect({ setResults }) {
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
      <Grid container className={classes.root}>
        <Grid item xs={12} md={4}>
          <Typography>Dream: {dream} </Typography>
          <AutocompleteTextField college={dream} callback={setDream} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Target: {target} </Typography>
          <AutocompleteTextField college={target} callback={setTarget} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Safety: {safety} </Typography>
          <AutocompleteTextField college={safety} callback={setSafety} />
        </Grid>
      </Grid>
      <Button onClick={() => handleClick()} size='small' color='primary'>
        Submit
      </Button>
    </>
  );
}

export default CollegeSelect;
