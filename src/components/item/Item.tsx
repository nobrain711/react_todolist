import React, { FC } from "react";
import { TodoItem } from "../../modules/types/types";

interface ItemProps {
  todo: TodoItem;
  toggleBool: (id: number) => void;
}
export const Item: FC<ItemProps> = ({ todo, toggleBool }) => {
  const handleToggle = () => {
    toggleBool(todo.id);
  };

  return (
    <>
      <li>
        <span>{todo.name}</span>
        <input type="checkbox" checked={todo.bool} onChange={handleToggle} />
      </li>
    </>
  );
};
