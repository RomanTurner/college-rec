import React from 'react'
import namesList from "./names.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";



function AutocompleteTextField({ college, callback }) {
  const names = Object.values(namesList);
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
        renderInput={(params) => (
          <TextField
            style={{ backgroundColor: "white", borderRadius: "3px" }}
            {...params}
            variant='outlined'
          />
        )}
      />
    </>
  );
}

export default AutocompleteTextField
