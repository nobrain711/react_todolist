import { FC } from "react";
import { TodoItem } from "../../modules/types/types";
import { useNavigate } from "react-router-dom";
import { TodoBoolCheckbox } from "../checkbox/todoBoolCheckbox";
import { StyledIi } from "./Item.syled";
import { Delete } from "../delete/delete";

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

  /**
   * page move funtion
   *
   * @param id todolist id
   */
  const moveToEdit = (id: number) => {
    navigate(`edits/${id}`);
  };

  return (
    <StyledIi onClick={hanldeItemClick}>
      <div>
        <TodoBoolCheckbox todo={todo} />
        <span>{todo.name}</span>
      </div>
      <div>
        <div onClick={() => moveToEdit(todo.id)}>edit</div>
        <Delete todo={todo} />
      </div>
    </StyledIi>
  );
};
