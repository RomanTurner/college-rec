import React from "react";
import { names } from "./collegesNames.js"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    display: "flex",
    justifyContent: "center",
  },
}));

function CollegeSelect({setResults}) {
  const classes = useStyles();
  const [dream, setDream] = React.useState("Pick A School");
  const [inputDream, setInputDream] = React.useState("");
  const [target, setTarget] = React.useState("Pick A School");
  const [inputTarget, setInputTarget] = React.useState("");
  const [safety, setSafety] = React.useState("Pick A School");
  const [inputSafety, setInputSafety] = React.useState("");
  

  const handleClick = () => {
    const selectResults =
   [ {
      dream,
      target,
      safety,
    }];
      
     const configObj = {
       method: 'POST',
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(selectResults)
     }

      fetch("https://college-rec-system.herokuapp.com/model/", configObj)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(e => console.error("e:", e))
    

      // fetch("https://college-rec-system.herokuapp.com/colleges/", {
      //   method: "GET"
      // })
      //   .then((res) => res.json())
      //   .then(console.log)
      //   .catch((e) => console.error("e:", e));

    // setResults([
    //   {
    //     admission_rate: 0.3154,
    //     avg_tuition: 64040.0,
    //     city: "Washington",
    //     schoolname: "American University",
    //     state: "DC",
    //     student_pop: 7485.0,
    //     url: "WWW.AMERICAN.EDU",
    //   },
    //   {
    //     admission_rate: 0.3154,
    //     avg_tuition: 64040.0,
    //     city: "Washington",
    //     schoolname: "American University",
    //     state: "DC",
    //     student_pop: 7485.0,
    //     url: "WWW.AMERICAN.EDU",
    //   },
    //   {
    //     admission_rate: 0.3154,
    //     avg_tuition: 64040.0,
    //     city: "Washington",
    //     schoolname: "American University",
    //     state: "DC",
    //     student_pop: 7485.0,
    //     url: "WWW.AMERICAN.EDU",
    //   },
    // ]);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4}>
        <Typography gutterBottom variant='h5' component='h2'>
          Dream :
        </Typography>
        <Autocomplete
          value={dream}
          onChange={(event, newValue) => {
            setDream(newValue);
          }}
          inputValue={inputDream}
          onInputChange={(event, newInputDream) => {
            setInputDream(newInputDream);
          }}
          id='controllable-states-demo'
          options={names}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography gutterBottom variant='h5' component='h2'>
          Target :
        </Typography>
        <Autocomplete
          value={target}
          onChange={(event, newValue) => {
            setTarget(newValue);
          }}
          inputValue={inputTarget}
          onInputChange={(event, newInputTarget) => {
            setInputTarget(newInputTarget);
          }}
          id='controllable-states-demo'
          options={names}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography gutterBottom variant='h5' component='h2'>
          Safety :
        </Typography>
        <Autocomplete
          value={safety}
          onChange={(event, newValue) => {
            setSafety(newValue);
          }}
          inputValue={inputSafety}
          onInputChange={(event, newInputSafety) => {
            setInputSafety(newInputSafety);
          }}
          id='controllable-states-demo'
          options={names}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
      <Button onClick={() => handleClick()} size='small' color='primary'>
        Submit
      </Button>
    </Grid>
  );
}

export default CollegeSelect;