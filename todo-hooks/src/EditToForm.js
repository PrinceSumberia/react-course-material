import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditToForm({ task, editTodo, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditToForm;
