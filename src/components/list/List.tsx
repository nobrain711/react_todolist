import React, { FC, useState, useEffect } from "react";
import { TodoItem } from "../../data/types";
import { dummyData } from "../../data/dummyData";
import { Item } from "../item/Item";

export const List: FC = () => {
  const [todolsit, setTodolist] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodolist(dummyData);
  }, []);

  const toggleBool = (id: number) => {
    setTodolist((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, bool: !todo.bool } : todo
      )
    );
  };

  return (
    <>
      <ul>
        {todolsit.map((todo: TodoItem) => (
          <Item todo={todo} toggleBool={toggleBool} />
          // <li key={todo.id}>
          //   <span>{todo.name}</span>
          //   <input type="checkbox" checked={todo.bool} />
          // </li>
        ))}
      </ul>
    </>
  );
};
