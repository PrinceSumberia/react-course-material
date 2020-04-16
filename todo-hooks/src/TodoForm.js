import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          fullWidth
          label="Enter a Todo"
          margin="normal"
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
