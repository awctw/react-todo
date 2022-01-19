import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {context.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={context.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
