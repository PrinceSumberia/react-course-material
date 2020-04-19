import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { List, Divider } from "@material-ui/core";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <Todo {...todo} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
