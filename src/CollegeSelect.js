import React from "react";
import { names } from "./collegesNames.js"
import Grid from "@material-ui/core/Grid";
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

function CollegeSelect({setResults}) {
  const classes = useStyles();
  const [dream, setDream] = React.useState(names[345]);
  const [target, setTarget] = React.useState(names[12]);
  const [safety, setSafety] = React.useState(names[123]);
  const handleData = (data) => {
  console.log(data)
}
  const handleClick = () => {
    const selectResults = {
        dream,
        target,
        safety,
      }
      
     const configObj = {
       method: 'POST',
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(selectResults)
     }

      fetch("https://college-rec-system.herokuapp.com/model/", configObj)
        .then(res => res.json())
        .then(data => handleData(data))
        .catch(e => console.error("e:", e))
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={4}>
          <AutocompleteTextField college={dream} callback={setDream} />
        </Grid>
        <Grid item xs={12} md={4}>
          <AutocompleteTextField college={target} callback={setTarget} />
        </Grid>
        <Grid item xs={12} md={4}>
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