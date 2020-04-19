import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [{ id: 1, task: "hello", completed: false }];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosstuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosstuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
