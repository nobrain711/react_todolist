import { TodoItem } from "../../../types/types";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { StyledInput } from "./todoBoolCheckbox.styled";
import { exchagneTodoBool } from "../../../redux/action/todoAction";

type Props = {
  todo: TodoItem;
};

export const TodoBoolCheckbox: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  /**
   * click event
   * todo bool value exchage
   */

  const handleToggleBool = () => {
    dispatch(exchagneTodoBool(todo.id));
  };

  return (
    <StyledInput
      type="checkbox"
      checked={todo.bool}
      onChange={handleToggleBool}
    />
  );
};
