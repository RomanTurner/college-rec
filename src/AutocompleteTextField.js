import React from 'react'
import { names } from "./collegesNames.js";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

function AutocompleteTextField({ college, callback }) {
     const [input, setInput] = React.useState("");
  return (
    <>
      <Typography gutterBottom variant='h5' component='h2'>
        Dream :
      </Typography>
      <Autocomplete
        value={college}
        onChange={(event, newValue) => {
          callback(newValue);
        }}
        inputValue={input}
        onInputChange={(event, newInput) => {
          setInput(newInput);
        }}
        id='autocomplete-textfield'
        options={names}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="title" variant='outlined' />
        )}
      />
    </>
  );
}

export default AutocompleteTextField
