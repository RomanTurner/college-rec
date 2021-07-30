import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";

const useStyles = makeStyles((theme) => ({
  gContainer: {
    flexGrow: 1,
    justifyContent:"center"
  },
  gItem: {
    padding: theme.spacing(2),
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    justifySelf: "center",
    backgroundColor: "pink",
    width: "80%",
  },
}));

export default function Test() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.gContainer}
      container
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      spacing={2}
    >
      <Grid className={classes.gItem} item xs={12}>
        <Paper className={classes.paper}>Some text</Paper>
      </Grid>
    </Grid>
  );
}
/*       <Grid className={classes.gItem} item xs={4}>
        <Paper className={classes.paper}>Some text</Paper>
      </Grid>
      <Grid className={classes.gItem} item xs={4}>
        <Paper className={classes.paper}>Some text</Paper>
      </Grid>
       */