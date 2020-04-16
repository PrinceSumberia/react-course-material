import React from "react";
import { Paper } from "@material-ui/core";
import { List, Divider } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <Todo
                {...todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
