import React from 'react'
import { names } from "./collegesNames.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function AutocompleteTextField({ college, callback }) {
     const [input, setInput] = React.useState("");
  return (
    <>
      <Autocomplete
        value={college}
        onChange={(event, newValue) => {
          callback(newValue);
        }}
        inputValue={input}
        onInputChange={(event, newInput) => {
          setInput(newInput);
        }}
        id={college}
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
