import React, { FC } from "react";
import { TodoItem } from "../../modules/types/types";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  todo: TodoItem;
  toggleBool: (id: number) => void;
}
export const Item: FC<ItemProps> = ({ todo, toggleBool }) => {
  const navigate = useNavigate();

  const handleToggle = () => {
    toggleBool(todo.id);
  };

  const hanldeItemClick = () => {
    navigate(`/details/${todo.id}`);
  };

  return (
    <>
      <li onClick={hanldeItemClick}>
        <span>{todo.name}</span>
        <input type="checkbox" checked={todo.bool} onChange={handleToggle} />
      </li>
    </>
  );
};
