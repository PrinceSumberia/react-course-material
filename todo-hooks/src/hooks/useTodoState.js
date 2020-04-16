import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
};
