import React from "react";
import nameList from "./names.json";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AutocompleteTextField from "./AutocompleteTextField.js";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'blue',
        minHeight: '300px',
    },
    card: {
        height: '100px',
        width: '100px'
    }
}))


export default function Test() {
    const classes = useStyles();
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.card}>
          <Paper>Hi</Paper>
        </Grid>
        <Grid item xs={12} className={classes.card}>
          <Paper>Hi</Paper>
        </Grid>
        <Grid container justify='center' item xs={12}>
          <Grid item xs={4}>
            <Paper className={classes.card}>Hi</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.card}>Hi</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.card}>Hi</Paper>
          </Grid>
        </Grid>
      </Grid>
    );
}
