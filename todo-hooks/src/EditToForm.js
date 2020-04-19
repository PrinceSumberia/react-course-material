import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function EditToForm({ task, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTas: value });
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
