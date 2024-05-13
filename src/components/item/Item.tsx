import { FC } from "react";
import { TodoItem } from "../../modules/types/types";
import { useNavigate } from "react-router-dom";
import { TodoBoolCheckbox } from "../checkbox/todoBoolCheckbox";

interface ItemProps {
  todo: TodoItem;
}
export const Item: FC<ItemProps> = ({ todo }) => {
  const navigate = useNavigate();

  /**
   * click event funtion
   * move for page /details/:todo.id
   */
  const hanldeItemClick = () => {
    navigate(`/details/${todo.id}`);
  };

  return (
    <>
      <li onClick={hanldeItemClick}>
        <span>{todo.name}</span>
        <TodoBoolCheckbox todo={todo} />
      </li>
    </>
  );
};
