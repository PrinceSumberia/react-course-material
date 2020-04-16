import React from "react";
import { Paper } from "@material-ui/core";
import { List, Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
