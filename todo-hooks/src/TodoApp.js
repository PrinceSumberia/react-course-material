import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "hello", completed: false },
    { id: 2, task: "world", completed: true },
    { id: 3, task: "again", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit" variant="h6">
            TODOS WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
