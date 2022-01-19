import React, { useState } from "react";

import Todo from "../models/Todo";

type TodoContextObj = {
  items: Todo[];
  onAddTodo: (enteredText: string) => void;
  onRemove: (id: string) => void;
};

export const TodosContext = React.createContext<{
  items: Todo[];
  onAddTodo: (enteredText: string) => void;
  onRemove: (id: string) => void;
}>({
  items: [],
  onAddTodo: (enteredText: string) => {},
  onRemove: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [enteredTodos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const onRemoveHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextObj = {
    items: enteredTodos,
    onAddTodo: onAddTodoHandler,
    onRemove: onRemoveHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
